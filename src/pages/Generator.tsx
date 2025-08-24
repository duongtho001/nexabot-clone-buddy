import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Settings, Sparkles, Video, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Generator() {
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [veoModel, setVeoModel] = useState("veo-3.0-generate-preview");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [personGeneration, setPersonGeneration] = useState("allow_all");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [numberOfVideos, setNumberOfVideos] = useState("1");
  const [duration, setDuration] = useState("8");
  const [cinematicEnhancement, setCinematicEnhancement] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to start generating content",
        variant: "destructive",
      });
      return;
    }

    if (!prompt) {
      toast({
        title: "Prompt Required", 
        description: "Please enter a description for your video",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate generation process
    toast({
      title: "Generation Started",
      description: "Your video is being generated...",
    });

    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Video Generated!",
        description: "Your AI video has been created successfully",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="ai-gradient-text">AI Content Generator</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* API Key */}
            <Card className="glass-effect border-white/10 p-6">
              <Label htmlFor="api-key" className="text-lg font-semibold mb-4 block">API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Required for AI generation"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="bg-background/50"
              />
              <p className="text-xs text-muted-foreground mt-2">Your API key is stored locally and never shared</p>
            </Card>

            {/* AI Tools Selection */}
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
                    <span className="font-medium text-muted-foreground">Filmmaker with Veo 3</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Create multi-scene cinematic stories with detailed JSON prompts
                  </p>
                </div>
              </div>
            </Card>

            {/* Video Generator Configuration */}
            <Card className="glass-effect border-white/10 p-6">
              <h3 className="text-lg font-semibold mb-6">Video Generator Configuration</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="veo-model">Veo Model</Label>
                    <Select value={veoModel} onValueChange={setVeoModel}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veo-3.0-generate-preview">veo-3.0-generate-preview</SelectItem>
                        <SelectItem value="veo-3.0-fast-generate-preview">veo-3.0-fast-generate-preview</SelectItem>
                        <SelectItem value="veo-2.0-generate-001">veo-2.0-generate-001</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
                    <Select value={aspectRatio} onValueChange={setAspectRatio}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16:9">16:9</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">(Veo 3 only supports 16:9)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="person-generation">Person Generation</Label>
                    <Select value={personGeneration} onValueChange={setPersonGeneration}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="allow_all">allow_all</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">(Text-to-video: allow_all only)</p>
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration (seconds)</Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">(Veo 3 fixed: 8s)</p>
                  </div>
                </div>

                <div>
                  <Label htmlFor="negative-prompt">Negative Prompt (Optional)</Label>
                  <Input
                    id="negative-prompt"
                    placeholder="What you don't want in the video..."
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <Label htmlFor="cinematic-enhancement">Cinematic Enhancement</Label>
                  <Textarea
                    id="cinematic-enhancement"
                    placeholder="Describe cinematic enhancements..."
                    value={cinematicEnhancement}
                    onChange={(e) => setCinematicEnhancement(e.target.value)}
                    className="bg-background/50 min-h-20"
                  />
                  <p className="text-xs text-muted-foreground mt-1">{cinematicEnhancement.length}/1000</p>
                </div>
              </div>
            </Card>

            {/* Prompt Input */}
            <Card className="glass-effect border-white/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Advanced Settings (Video Generator)</h3>
              </div>
              
              <Textarea
                placeholder="Tell me what you want to create with Video Generator..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-32 bg-background/50 text-lg"
              />
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                  Press Enter to send, Shift+Enter for new line
                </p>
                <Button 
                  variant="hero" 
                  onClick={handleGenerate} 
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
          </div>

          {/* Right Panel - Content Gallery */}
          <div className="space-y-6">
            <Card className="glass-effect border-white/10 p-6">
              <h3 className="text-lg font-semibold mb-4">Content Gallery</h3>
              <p className="text-sm text-muted-foreground mb-4">0 completed • 0 generating</p>
              
              <div className="text-center py-12">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="font-medium mb-2">No content yet</h4>
                <p className="text-sm text-muted-foreground">
                  Generate your first content to get started!
                </p>
              </div>
            </Card>

            {/* Tools */}
            <Card className="glass-effect border-white/10 p-6">
              <h3 className="text-lg font-semibold mb-4">Tools</h3>
              <Button variant="outline" className="w-full mb-3">
                <Video className="w-4 h-4" />
                Video Generator
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}