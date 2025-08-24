import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { X, Settings } from "lucide-react";
import { VideoConfig, VoiceConfig, ImageConfig, AITool } from "@/types/generator";
import { VoiceSettings } from "./VoiceSettings";
import { ImageSettings } from "./ImageSettings";

interface SettingsSidebarProps {
  videoConfig: VideoConfig;
  voiceConfig: VoiceConfig;
  imageConfig: ImageConfig;
  negativePrompt: string;
  activeTool: AITool;
  onVideoConfigChange: (updates: Partial<VideoConfig>) => void;
  onVoiceConfigChange: (updates: Partial<VoiceConfig>) => void;
  onImageConfigChange: (updates: Partial<ImageConfig>) => void;
  onNegativePromptChange: (value: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsSidebar({ 
  videoConfig,
  voiceConfig,
  imageConfig,
  negativePrompt,
  activeTool,
  onVideoConfigChange,
  onVoiceConfigChange,
  onImageConfigChange,
  onNegativePromptChange,
  isOpen,
  onClose
}: SettingsSidebarProps) {
  
  const getToolName = () => {
    switch (activeTool) {
      case 'video': return 'Video Generator';
      case 'filmmaker': return 'Filmmaker';
      case 'voice': return 'Voice Over Generator';
      case 'microstock': return 'Microstock Generator';
      default: return 'Settings';
    }
  };

  const renderSettings = () => {
    switch (activeTool) {
      case 'video':
      case 'filmmaker':
        return (
          <>
            {/* Video Model */}
            <div>
              <Label className="text-sm font-medium text-white mb-3 block">Veo Model</Label>
              <Select value={videoConfig.veoModel} onValueChange={(value) => onVideoConfigChange({ veoModel: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/10">
                  <SelectItem value="veo-3.0-generate-preview">Veo 3.0 Generate (Preview)</SelectItem>
                  <SelectItem value="veo-2.5-turbo">Veo 2.5 Turbo</SelectItem>
                  <SelectItem value="veo-2.0-standard">Veo 2.0 Standard</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Aspect Ratio */}
            <div>
              <Label className="text-sm font-medium text-white mb-3 block">Aspect Ratio</Label>
              <Select value={videoConfig.aspectRatio} onValueChange={(value) => onVideoConfigChange({ aspectRatio: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/10">
                  <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
                  <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                  <SelectItem value="1:1">1:1 (Square)</SelectItem>
                  <SelectItem value="4:3">4:3 (Classic)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Person Generation */}
            <div>
              <Label className="text-sm font-medium text-white mb-3 block">Person Generation</Label>
              <Select value={videoConfig.personGeneration} onValueChange={(value) => onVideoConfigChange({ personGeneration: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/10">
                  <SelectItem value="allow_all">Allow All</SelectItem>
                  <SelectItem value="no_people">No People</SelectItem>
                  <SelectItem value="limited">Limited</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Duration */}
            <div>
              <Label className="text-sm font-medium text-white mb-3 block">
                Duration: {videoConfig.duration}s
              </Label>
              <Select value={videoConfig.duration} onValueChange={(value) => onVideoConfigChange({ duration: value })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black/95 border-white/10">
                  <SelectItem value="4">4 seconds</SelectItem>
                  <SelectItem value="8">8 seconds</SelectItem>
                  <SelectItem value="12">12 seconds</SelectItem>
                  <SelectItem value="16">16 seconds</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Negative Prompt */}
            <div>
              <Label className="text-sm font-medium text-white mb-3 block">Negative Prompt</Label>
              <Input
                type="text"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                placeholder="What to avoid in the video..."
                value={negativePrompt}
                onChange={(e) => onNegativePromptChange(e.target.value)}
              />
              <p className="text-xs text-gray-400 mt-1">Specify what you don't want to see</p>
            </div>
          </>
        );

      case 'voice':
        return <VoiceSettings config={voiceConfig} onChange={onVoiceConfigChange} />;

      case 'microstock':
        return <ImageSettings config={imageConfig} onChange={onImageConfigChange} />;

      default:
        return <div className="text-gray-400 text-center">No settings available</div>;
    }
  };

  return (
    <div className={`fixed top-6 right-6 w-80 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1.5rem)]'}`}
         style={{ height: 'calc(100vh - 3rem)' }}>
      <div className="rounded-lg border text-card-foreground shadow-sm h-full backdrop-blur-xl bg-white/[0.02] border-white/10 overflow-hidden flex flex-col">
        <div className="flex flex-col space-y-1.5 p-6 border-b border-white/10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">{getToolName()}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-400">Configure generation settings</p>
        </div>

        <div className="p-6 flex-1 overflow-y-auto dark-scrollbar space-y-6">
          {renderSettings()}
        </div>
      </div>
    </div>
  );
}