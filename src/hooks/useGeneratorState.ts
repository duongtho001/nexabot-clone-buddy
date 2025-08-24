import { useState } from "react";
import { GeneratorState, VideoConfig } from "@/types/generator";

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

  return {
    state,
    updateState,
    updateVideoConfig,
  };
}