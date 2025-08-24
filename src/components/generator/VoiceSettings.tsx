import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { VoiceConfig } from "@/types/generator";

interface VoiceSettingsProps {
  config: VoiceConfig;
  onChange: (updates: Partial<VoiceConfig>) => void;
}

const voices = [
  { id: "9BWtsMINqrJLrRacOk9x", name: "Aria" },
  { id: "CwhRBWXzGAHq8TQ4Fs17", name: "Roger" },
  { id: "EXAVITQu4vr4xnSDxMaL", name: "Sarah" },
  { id: "FGY2WhTYpPnrIDTdsKH5", name: "Laura" },
  { id: "IKne3meq5aSn9XLyUdCD", name: "Charlie" },
  { id: "JBFqnCBsd6RMkjVDRZzb", name: "George" },
  { id: "N2lVS1w4EtoT3dr4eOWO", name: "Callum" },
  { id: "SAz9YHcvj6GT2YYXdXww", name: "River" },
  { id: "TX3LPaxmHKxFdv7VOQHJ", name: "Liam" },
  { id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte" }
];

const models = [
  { id: "eleven_multilingual_v2", name: "Eleven Multilingual v2" },
  { id: "eleven_turbo_v2_5", name: "Eleven Turbo v2.5" },
  { id: "eleven_turbo_v2", name: "Eleven Turbo v2" },
  { id: "eleven_multilingual_v1", name: "Eleven Multilingual v1" }
];

export function VoiceSettings({ config, onChange }: VoiceSettingsProps) {
  return (
    <div className="space-y-6">
      {/* Model Selection */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">Model</Label>
        <Select value={config.model} onValueChange={(value) => onChange({ model: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/95 border-white/10">
            {models.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Voice Selection */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">Voice</Label>
        <Select value={config.voice} onValueChange={(value) => onChange({ voice: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/95 border-white/10">
            {voices.map((voice) => (
              <SelectItem key={voice.id} value={voice.id}>
                {voice.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Stability */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">
          Stability: {config.stability.toFixed(2)}
        </Label>
        <Slider
          value={[config.stability]}
          onValueChange={([value]) => onChange({ stability: value })}
          max={1}
          min={0}
          step={0.01}
          className="w-full"
        />
        <p className="text-xs text-gray-400 mt-1">Controls voice consistency</p>
      </div>

      {/* Similarity */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">
          Similarity: {config.similarity.toFixed(2)}
        </Label>
        <Slider
          value={[config.similarity]}
          onValueChange={([value]) => onChange({ similarity: value })}
          max={1}
          min={0}
          step={0.01}
          className="w-full"
        />
        <p className="text-xs text-gray-400 mt-1">Voice similarity enhancement</p>
      </div>

      {/* Style */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">
          Style: {config.style.toFixed(2)}
        </Label>
        <Slider
          value={[config.style]}
          onValueChange={([value]) => onChange({ style: value })}
          max={1}
          min={0}
          step={0.01}
          className="w-full"
        />
        <p className="text-xs text-gray-400 mt-1">Style exaggeration level</p>
      </div>

      {/* Speaker Boost */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label className="text-sm font-medium text-white">Speaker Boost</Label>
          <p className="text-xs text-gray-400">Enhance voice clarity</p>
        </div>
        <Switch
          checked={config.speakerBoost}
          onCheckedChange={(checked) => onChange({ speakerBoost: checked })}
        />
      </div>
    </div>
  );
}