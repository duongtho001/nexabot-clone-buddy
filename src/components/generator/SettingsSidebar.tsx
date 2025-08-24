import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Settings, Sparkles, X } from "lucide-react";
import { VideoConfig } from "@/types/generator";

interface SettingsSidebarProps {
  config: VideoConfig;
  negativePrompt: string;
  onConfigChange: (updates: Partial<VideoConfig>) => void;
  onNegativePromptChange: (value: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsSidebar({
  config,
  negativePrompt,
  onConfigChange,
  onNegativePromptChange,
  isOpen,
  onClose
}: SettingsSidebarProps) {
  return (
    <div className={`fixed top-6 right-6 w-80 z-50 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1.5rem)]'}`}
         style={{ height: 'calc(100vh - 3rem)' }}>
      <div className="rounded-lg border text-card-foreground shadow-sm h-full backdrop-blur-xl bg-white/[0.02] border-white/10 overflow-hidden flex flex-col">
        <div className="flex flex-col space-y-1.5 p-6 border-b border-white/10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-primary" />
              <div className="tracking-tight text-white text-lg font-semibold">Settings</div>
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
          <p className="text-gray-400 text-sm">Video Generator Configuration</p>
        </div>

        <div className="p-4 flex-1 overflow-y-auto dark-scrollbar pr-2"
             style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) rgba(0,0,0,0.1)' }}>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-primary" />
              <Label className="text-sm font-medium text-white">Parameters</Label>
            </div>

            <div className="space-y-4">
              {/* Veo Model */}
              <div className="space-y-2">
                <Label className="font-medium text-sm text-gray-300">Veo Model</Label>
                <Select value={config.veoModel} onValueChange={(value) => onConfigChange({ veoModel: value })}>
                  <SelectTrigger className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="veo-3.0-generate-preview" className="bg-zinc-900 text-white">
                      veo-3.0-generate-preview
                    </SelectItem>
                    <SelectItem value="veo-3.0-fast-generate-preview" className="bg-zinc-900 text-white">
                      veo-3.0-fast-generate-preview
                    </SelectItem>
                    <SelectItem value="veo-2.0-generate-001" className="bg-zinc-900 text-white">
                      veo-2.0-generate-001
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Aspect Ratio */}
              <div className="space-y-2">
                <Label className="font-medium text-sm text-gray-300">
                  Aspect Ratio
                  <span className="text-xs text-amber-400 ml-2">(Veo 3 only supports 16:9)</span>
                </Label>
                <Select value={config.aspectRatio} onValueChange={(value) => onConfigChange({ aspectRatio: value })}>
                  <SelectTrigger className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="16:9" className="bg-zinc-900 text-white">16:9</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Person Generation */}
              <div className="space-y-2">
                <Label className="font-medium text-sm text-gray-300">
                  Person Generation
                  <span className="text-xs text-amber-400 ml-2">(Text-to-video: allow_all only)</span>
                </Label>
                <Select value={config.personGeneration} onValueChange={(value) => onConfigChange({ personGeneration: value })}>
                  <SelectTrigger className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-primary focus:outline-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    <SelectItem value="allow_all" className="bg-zinc-900 text-white">allow_all</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Negative Prompt */}
              <div className="space-y-2">
                <Label className="font-medium text-sm text-gray-300">Negative Prompt (Optional)</Label>
                <Input
                  className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                  placeholder="e.g., cartoon, drawing, low quality"
                  value={negativePrompt}
                  onChange={(e) => onNegativePromptChange(e.target.value)}
                />
              </div>

              {/* Number of Videos */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="font-medium text-sm text-gray-300">
                    Number of Videos
                    <span className="text-xs text-amber-400 ml-2">(Veo 3 fixed: 1)</span>
                  </Label>
                  <span className="text-sm text-primary font-medium">1</span>
                </div>
                <Slider
                  value={[1]}
                  min={1}
                  max={1}
                  disabled
                  className="w-full"
                />
              </div>

              {/* Duration */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="font-medium text-sm text-gray-300">
                    Duration (seconds)
                    <span className="text-xs text-amber-400 ml-2">(Veo 3 fixed: 8s)</span>
                  </Label>
                  <span className="text-sm text-primary font-medium">8</span>
                </div>
                <Slider
                  value={[8]}
                  min={8}
                  max={8}
                  disabled
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}