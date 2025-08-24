import { supabase } from "@/integrations/supabase/client";
import type { VideoConfig } from "@/types/generator";

export interface VideoGenerationRequest {
  prompt: string;
  model: string;
  aspectRatio: string;
  duration: string;
  personGeneration: string;
  negativePrompt?: string;
  cinematicEnhancement?: string;
}

export interface VideoGenerationResponse {
  success: boolean;
  videoUrl?: string;
  operationName?: string;
  message?: string;
  error?: string;
  details?: string;
}

export async function generateVideo(
  prompt: string,
  config: VideoConfig,
  negativePrompt?: string,
  cinematicEnhancement?: string
): Promise<VideoGenerationResponse> {
  try {
    console.log('Initiating video generation...', { prompt, config });

    const requestData: VideoGenerationRequest = {
      prompt,
      model: config.veoModel,
      aspectRatio: config.aspectRatio,
      duration: config.duration,
      personGeneration: config.personGeneration,
      negativePrompt,
      cinematicEnhancement,
    };

    const { data, error } = await supabase.functions.invoke('generate-video', {
      body: requestData,
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw new Error(`Function call failed: ${error.message}`);
    }

    console.log('Video generation response:', data);
    return data as VideoGenerationResponse;

  } catch (error) {
    console.error('Video generation failed:', error);
    return {
      success: false,
      error: 'Video generation failed',
      details: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export async function getVideoStatus(operationName: string): Promise<{
  status: 'processing' | 'completed' | 'failed';
  videoUrl?: string;
  error?: string;
}> {
  try {
    // This would typically call a status checking endpoint
    // For now, we'll simulate the status check
    console.log('Checking video status for operation:', operationName);
    
    // TODO: Implement actual status checking when VEO API supports it
    return {
      status: 'processing',
    };
  } catch (error) {
    console.error('Status check failed:', error);
    return {
      status: 'failed',
      error: error instanceof Error ? error.message : 'Status check failed',
    };
  }
}