import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface PromptSectionProps {
  prompt: string;
  isGenerating: boolean;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
}

export function PromptSection({
  prompt,
  isGenerating,
  onPromptChange,
  onGenerate,
}: PromptSectionProps) {
  return (
    <Card className="glass-effect border-white/10 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Advanced Settings (Video Generator)</h3>
      </div>
      
      <Textarea
        placeholder="Tell me what you want to create with Video Generator..."
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        className="min-h-32 bg-background/50 text-lg"
      />
      
      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-muted-foreground">
          Press Enter to send, Shift+Enter for new line
        </p>
        <Button 
          variant="hero" 
          onClick={onGenerate} 
          disabled={isGenerating}
          className="ml-auto"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}