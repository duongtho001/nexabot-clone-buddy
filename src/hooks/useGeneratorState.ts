import { useState } from "react";
import { GeneratorState, VideoConfig, VoiceConfig, ImageConfig, VideoResult, AITool } from "@/types/generator";

const initialVideoConfig: VideoConfig = {
  veoModel: "veo-3.0-generate-preview",
  aspectRatio: "16:9",
  personGeneration: "allow_all",
  duration: "8",
};

const initialVoiceConfig: VoiceConfig = {
  model: "eleven_multilingual_v2",
  voice: "9BWtsMINqrJLrRacOk9x", // Aria
  stability: 0.5,
  similarity: 0.75,
  style: 0,
  speakerBoost: true,
};

const initialImageConfig: ImageConfig = {
  model: "dall-e-3",
  size: "1024x1024",
  style: "vivid",
  quality: "standard",
};

const initialState: GeneratorState = {
  apiKey: "",
  prompt: "",
  negativePrompt: "",
  cinematicEnhancement: "",
  isGenerating: false,
  activeTool: "video",
  videoConfig: initialVideoConfig,
  voiceConfig: initialVoiceConfig,
  imageConfig: initialImageConfig,
  videoResults: [],
};

export function useGeneratorState() {
  const [state, setState] = useState<GeneratorState>(initialState);

  const updateState = (updates: Partial<GeneratorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const updateVideoConfig = (updates: Partial<VideoConfig>) => {
    setState(prev => ({
      ...prev,
      videoConfig: { ...prev.videoConfig, ...updates }
    }));
  };

  const updateVoiceConfig = (updates: Partial<VoiceConfig>) => {
    setState(prev => ({
      ...prev,
      voiceConfig: { ...prev.voiceConfig, ...updates }
    }));
  };

  const updateImageConfig = (updates: Partial<ImageConfig>) => {
    setState(prev => ({
      ...prev,
      imageConfig: { ...prev.imageConfig, ...updates }
    }));
  };

  const setActiveTool = (tool: AITool) => {
    setState(prev => ({
      ...prev,
      activeTool: tool
    }));
  };

  const addVideoResult = (result: VideoResult) => {
    setState(prev => ({
      ...prev,
      videoResults: [...prev.videoResults, result]
    }));
  };

  const updateVideoResult = (id: string, updates: Partial<VideoResult>) => {
    setState(prev => ({
      ...prev,
      videoResults: prev.videoResults.map(result =>
        result.id === id ? { ...result, ...updates } : result
      )
    }));
  };

  const removeVideoResult = (id: string) => {
    setState(prev => ({
      ...prev,
      videoResults: prev.videoResults.filter(result => result.id !== id)
    }));
  };

  return {
    state,
    updateState,
    updateVideoConfig,
    updateVoiceConfig,
    updateImageConfig,
    setActiveTool,
    addVideoResult,
    updateVideoResult,
    removeVideoResult,
  };
}