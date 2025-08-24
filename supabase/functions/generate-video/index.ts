const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface VideoGenerationRequest {
  prompt: string;
  model: string;
  aspectRatio: string;
  duration: string;
  personGeneration: string;
  negativePrompt?: string;
  cinematicEnhancement?: string;
}

interface VeoApiResponse {
  name: string;
  done?: boolean;
  response?: {
    generateVideoResponse?: {
      generatedSamples?: Array<{
        video?: {
          uri: string;
        };
      }>;
    };
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Video generation request received');
    
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      console.error('Gemini API key not found');
      return new Response(
        JSON.stringify({ error: 'Gemini API key not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const requestData: VideoGenerationRequest = await req.json();
    console.log('Request data:', requestData);

    // Validate required fields
    if (!requestData.prompt) {
      return new Response(
        JSON.stringify({ error: 'Prompt is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Construct Gemini API request body
    const geminiRequestBody = {
      instances: [{
        prompt: requestData.prompt
      }],
      parameters: {
        aspectRatio: requestData.aspectRatio || '16:9',
        personGeneration: requestData.personGeneration || 'allow_all'
      }
    };

    // Add optional parameters
    if (requestData.negativePrompt) {
      geminiRequestBody.parameters.negativePrompt = requestData.negativePrompt;
    }

    console.log('Gemini API request body:', geminiRequestBody);

    // Call Gemini VEO API
    const veoResponse = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/veo-3.0-generate-preview:predictLongRunning',
      {
        method: 'POST',
        headers: {
          'x-goog-api-key': geminiApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(geminiRequestBody),
      }
    );

    console.log('VEO API response status:', veoResponse.status);

    if (!veoResponse.ok) {
      const errorText = await veoResponse.text();
      console.error('VEO API error:', errorText);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to generate video',
          details: errorText
        }),
        { 
          status: veoResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const veoResult: VeoApiResponse = await veoResponse.json();
    console.log('VEO API result:', veoResult);

    // Check if this is a long-running operation
    if (veoResult.name && !veoResult.done) {
      // Return operation name for polling
      return new Response(
        JSON.stringify({
          success: true,
          operationName: veoResult.name,
          status: 'processing',
          message: 'Video generation started'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Extract video URL from completed response
    const videoUrl = veoResult.response?.generateVideoResponse?.generatedSamples?.[0]?.video?.uri;
    
    if (!videoUrl) {
      console.error('No video URL in response');
      return new Response(
        JSON.stringify({ 
          error: 'Video generation failed',
          details: 'No video URL returned from API'
        }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Video generation successful, URL:', videoUrl);

    return new Response(
      JSON.stringify({
        success: true,
        videoUrl: videoUrl,
        operationName: veoResult.name,
        message: 'Video generated successfully'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});