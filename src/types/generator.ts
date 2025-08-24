export interface VideoConfig {
  veoModel: string;
  aspectRatio: string;
  personGeneration: string;
  duration: string;
}

export interface GeneratorState {
  apiKey: string;
  prompt: string;
  negativePrompt: string;
  cinematicEnhancement: string;
  isGenerating: boolean;
  videoConfig: VideoConfig;
}

export interface GeneratorFormProps {
  state: GeneratorState;
  onStateChange: (updates: Partial<GeneratorState>) => void;
  onGenerate: () => void;
}