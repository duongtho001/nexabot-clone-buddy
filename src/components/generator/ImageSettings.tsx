import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageConfig } from "@/types/generator";

interface ImageSettingsProps {
  config: ImageConfig;
  onChange: (updates: Partial<ImageConfig>) => void;
}

const models = [
  { id: "dall-e-3", name: "DALL-E 3" },
  { id: "dall-e-2", name: "DALL-E 2" },
  { id: "stable-diffusion-xl", name: "Stable Diffusion XL" }
];

const sizes = [
  { id: "1024x1024", name: "Square (1024×1024)" },
  { id: "1024x1792", name: "Portrait (1024×1792)" },
  { id: "1792x1024", name: "Landscape (1792×1024)" }
];

const styles = [
  { id: "vivid", name: "Vivid" },
  { id: "natural", name: "Natural" }
];

const qualities = [
  { id: "standard", name: "Standard" },
  { id: "hd", name: "HD" }
];

export function ImageSettings({ config, onChange }: ImageSettingsProps) {
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

      {/* Size Selection */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">Size</Label>
        <Select value={config.size} onValueChange={(value) => onChange({ size: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/95 border-white/10">
            {sizes.map((size) => (
              <SelectItem key={size.id} value={size.id}>
                {size.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Style Selection */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">Style</Label>
        <Select value={config.style} onValueChange={(value) => onChange({ style: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/95 border-white/10">
            {styles.map((style) => (
              <SelectItem key={style.id} value={style.id}>
                {style.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-400 mt-1">
          Vivid: hyper-real and dramatic images. Natural: more natural, less hyper-real.
        </p>
      </div>

      {/* Quality Selection */}
      <div>
        <Label className="text-sm font-medium text-white mb-3 block">Quality</Label>
        <Select value={config.quality} onValueChange={(value) => onChange({ quality: value })}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-black/95 border-white/10">
            {qualities.map((quality) => (
              <SelectItem key={quality.id} value={quality.id}>
                {quality.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-400 mt-1">
          HD creates images with finer details and greater consistency across the image.
        </p>
      </div>
    </div>
  );
}