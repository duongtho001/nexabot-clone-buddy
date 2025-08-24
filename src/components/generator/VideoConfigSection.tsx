import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { VideoConfig } from "@/types/generator";

interface VideoConfigSectionProps {
  config: VideoConfig;
  negativePrompt: string;
  cinematicEnhancement: string;
  onConfigChange: (updates: Partial<VideoConfig>) => void;
  onNegativePromptChange: (value: string) => void;
  onCinematicEnhancementChange: (value: string) => void;
}

export function VideoConfigSection({
  config,
  negativePrompt,
  cinematicEnhancement,
  onConfigChange,
  onNegativePromptChange,
  onCinematicEnhancementChange,
}: VideoConfigSectionProps) {
  return (
    <Card className="glass-effect border-white/10 p-6">
      <h3 className="text-lg font-semibold mb-6">Video Generator Configuration</h3>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="veo-model">Veo Model</Label>
            <Select 
              value={config.veoModel} 
              onValueChange={(value) => onConfigChange({ veoModel: value })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="veo-3.0-generate-preview">
                  veo-3.0-generate-preview
                </SelectItem>
                <SelectItem value="veo-3.0-fast-generate-preview">
                  veo-3.0-fast-generate-preview
                </SelectItem>
                <SelectItem value="veo-2.0-generate-001">
                  veo-2.0-generate-001
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
            <Select 
              value={config.aspectRatio} 
              onValueChange={(value) => onConfigChange({ aspectRatio: value })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16:9">16:9</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              (Veo 3 only supports 16:9)
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="person-generation">Person Generation</Label>
            <Select 
              value={config.personGeneration} 
              onValueChange={(value) => onConfigChange({ personGeneration: value })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="allow_all">allow_all</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              (Text-to-video: allow_all only)
            </p>
          </div>

          <div>
            <Label htmlFor="duration">Duration (seconds)</Label>
            <Select 
              value={config.duration} 
              onValueChange={(value) => onConfigChange({ duration: value })}
            >
              <SelectTrigger className="bg-background/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              (Veo 3 fixed: 8s)
            </p>
          </div>
        </div>

        <div>
          <Label htmlFor="negative-prompt">Negative Prompt (Optional)</Label>
          <Input
            id="negative-prompt"
            placeholder="What you don't want in the video..."
            value={negativePrompt}
            onChange={(e) => onNegativePromptChange(e.target.value)}
            className="bg-background/50"
          />
        </div>

        <div>
          <Label htmlFor="cinematic-enhancement">Cinematic Enhancement</Label>
          <Textarea
            id="cinematic-enhancement"
            placeholder="Describe cinematic enhancements..."
            value={cinematicEnhancement}
            onChange={(e) => onCinematicEnhancementChange(e.target.value)}
            className="bg-background/50 min-h-20"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {cinematicEnhancement.length}/1000
          </p>
        </div>
      </div>
    </Card>
  );
}