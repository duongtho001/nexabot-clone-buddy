import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Video } from "lucide-react";

export function ContentGallery() {
  return (
    <div className="space-y-6">
      <Card className="glass-effect border-white/10 p-6">
        <h3 className="text-lg font-semibold mb-4">Content Gallery</h3>
        <p className="text-sm text-muted-foreground mb-4">
          0 completed • 0 generating
        </p>
        
        <div className="text-center py-12">
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h4 className="font-medium mb-2">No content yet</h4>
          <p className="text-sm text-muted-foreground">
            Generate your first content to get started!
          </p>
        </div>
      </Card>

      <Card className="glass-effect border-white/10 p-6">
        <h3 className="text-lg font-semibold mb-4">Tools</h3>
        <Button variant="outline" className="w-full mb-3">
          <Video className="w-4 h-4" />
          Video Generator
        </Button>
      </Card>
    </div>
  );
}