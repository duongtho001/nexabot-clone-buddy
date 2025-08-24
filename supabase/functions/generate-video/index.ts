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
  response?: {
    generatedVideo?: {
      uri: string;
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
    
    const veoApiKey = Deno.env.get('VEO_API_KEY');
    if (!veoApiKey) {
      console.error('VEO API key not found');
      return new Response(
        JSON.stringify({ error: 'VEO API key not configured' }),
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

    // Construct VEO API request
    const veoRequestBody = {
      model: requestData.model || 'veo-3.0-generate-preview',
      prompt: requestData.prompt,
      aspectRatio: requestData.aspectRatio || '16:9',
      duration: `${requestData.duration || 8}s`,
      personGeneration: requestData.personGeneration || 'allow_all',
    };

    // Add optional parameters
    if (requestData.negativePrompt) {
      veoRequestBody.negativePrompt = requestData.negativePrompt;
    }

    if (requestData.cinematicEnhancement) {
      veoRequestBody.cinematicEnhancement = requestData.cinematicEnhancement;
    }

    console.log('VEO API request body:', veoRequestBody);

    // Call Google VEO API
    const veoResponse = await fetch(
      'https://aiplatform.googleapis.com/v1/projects/pwiwrphpwiwrsgtxamqt/locations/us-central1/publishers/google/models/veo-3.0-generate-preview:generateContent',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${veoApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: requestData.prompt
            }]
          }],
          generationConfig: {
            aspectRatio: veoRequestBody.aspectRatio,
            duration: veoRequestBody.duration,
            personGeneration: veoRequestBody.personGeneration,
          }
        }),
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

    // Extract video URL from response
    const videoUrl = veoResult.response?.generatedVideo?.uri;
    
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