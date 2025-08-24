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

// Function to get OAuth 2.0 access token from service account
async function getAccessToken(serviceAccountKey: string): Promise<string> {
  try {
    const serviceAccount = JSON.parse(serviceAccountKey);
    
    // Create JWT header and payload
    const header = {
      alg: 'RS256',
      typ: 'JWT',
      kid: serviceAccount.private_key_id
    };
    
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: serviceAccount.client_email,
      sub: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600 // 1 hour
    };
    
    // Create JWT
    const encoder = new TextEncoder();
    const headerB64 = btoa(JSON.stringify(header)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    const payloadB64 = btoa(JSON.stringify(payload)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    
    const message = `${headerB64}.${payloadB64}`;
    
    // Import private key
    const privateKey = serviceAccount.private_key.replace(/\\n/g, '\n');
    const keyData = await crypto.subtle.importKey(
      'pkcs8',
      encoder.encode(privateKey.replace('-----BEGIN PRIVATE KEY-----\n', '').replace('\n-----END PRIVATE KEY-----', '').replace(/\n/g, '')),
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256'
      },
      false,
      ['sign']
    );
    
    // Sign the JWT
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      keyData,
      encoder.encode(message)
    );
    
    const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    
    const jwt = `${message}.${signatureB64}`;
    
    // Exchange JWT for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`
    });
    
    if (!tokenResponse.ok) {
      throw new Error(`Token request failed: ${tokenResponse.status}`);
    }
    
    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw error;
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Video generation request received');
    
    const serviceAccountKey = Deno.env.get('GOOGLE_SERVICE_ACCOUNT_KEY');
    if (!serviceAccountKey) {
      console.error('Google service account key not found');
      return new Response(
        JSON.stringify({ error: 'Google service account key not configured' }),
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

    // Get OAuth 2.0 access token
    console.log('Getting OAuth 2.0 access token...');
    const accessToken = await getAccessToken(serviceAccountKey);
    console.log('Access token obtained successfully');

    // Call Google VEO API
    const veoResponse = await fetch(
      'https://aiplatform.googleapis.com/v1/projects/pwiwrphpwiwrsgtxamqt/locations/us-central1/publishers/google/models/veo-3.0-generate-preview:generateContent',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
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