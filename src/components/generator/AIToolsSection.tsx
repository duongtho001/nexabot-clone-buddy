import { Card } from "@/components/ui/card";
import { Video, Settings } from "lucide-react";

export function AIToolsSection() {
  return (
    <Card className="glass-effect border-white/10 p-6">
      <h3 className="text-lg font-semibold mb-4">AI Tools</h3>
      <div className="space-y-4">
        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5 text-primary" />
            <span className="font-medium">Video Generator</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Create stunning videos from text prompts using Google Veo models
          </p>
        </div>
        
        <div className="p-4 bg-muted/20 rounded-lg border border-muted/30 opacity-60">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium text-muted-foreground">
              Filmmaker with Veo 3
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Create multi-scene cinematic stories with detailed JSON prompts
          </p>
        </div>
      </div>
    </Card>
  );
}