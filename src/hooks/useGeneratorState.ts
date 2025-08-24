import { useState } from "react";
import { GeneratorState, VideoConfig, VideoResult } from "@/types/generator";

const initialVideoConfig: VideoConfig = {
  veoModel: "veo-3.0-generate-preview",
  aspectRatio: "16:9",
  personGeneration: "allow_all",
  duration: "8",
};

const initialState: GeneratorState = {
  apiKey: "",
  prompt: "",
  negativePrompt: "",
  cinematicEnhancement: "",
  isGenerating: false,
  videoConfig: initialVideoConfig,
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
    addVideoResult,
    updateVideoResult,
    removeVideoResult,
  };
}