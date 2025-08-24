export type AITool = 'video' | 'filmmaker' | 'voice' | 'microstock';

export interface VideoConfig {
  veoModel: string;
  aspectRatio: string;
  personGeneration: string;
  duration: string;
}

export interface VoiceConfig {
  model: string;
  voice: string;
  stability: number;
  similarity: number;
  style: number;
  speakerBoost: boolean;
}

export interface ImageConfig {
  model: string;
  size: string;
  style: string;
  quality: string;
}

export interface VideoResult {
  id: string;
  prompt: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  status: 'generating' | 'completed' | 'error';
  progress?: number;
  createdAt: Date;
  completedAt?: Date;
}

export interface GeneratorState {
  apiKey: string;
  prompt: string;
  negativePrompt: string;
  cinematicEnhancement: string;
  isGenerating: boolean;
  activeTool: AITool;
  videoConfig: VideoConfig;
  voiceConfig: VoiceConfig;
  imageConfig: ImageConfig;
  videoResults: VideoResult[];
}

export interface GeneratorFormProps {
  state: GeneratorState;
  onStateChange: (updates: Partial<GeneratorState>) => void;
  onGenerate: () => void;
}