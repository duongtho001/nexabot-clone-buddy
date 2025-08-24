import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Sparkles, Video, Film, Mic, Image as ImageIcon, X, House } from "lucide-react";
import { Link } from "react-router-dom";
import { AITool } from "@/types/generator";

interface SidebarProps {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
  isOpen: boolean;
  onClose: () => void;
  activeTool?: AITool;
  onToolChange?: (tool: AITool) => void;
}

export function Sidebar({ 
  apiKey, 
  onApiKeyChange, 
  isOpen, 
  onClose, 
  activeTool = 'video',
  onToolChange 
}: SidebarProps) {
  
  const aiTools = [
    {
      id: 'video' as AITool,
      name: 'Video Generator',
      description: 'Create stunning videos from text prompts using Google Veo models',
      icon: Video,
      iconColor: 'text-primary'
    },
    {
      id: 'filmmaker' as AITool,
      name: 'Filmmaker',
      description: 'Professional video editing with AI-powered effects and transitions',
      icon: Film,
      iconColor: 'text-gray-400'
    },
    {
      id: 'voice' as AITool,
      name: 'Voice Over Generator',
      description: 'Generate natural-sounding voice overs for your content',
      icon: Mic,
      iconColor: 'text-gray-400'
    },
    {
      id: 'microstock' as AITool,
      name: 'Microstock Generator',
      description: 'Create high-quality stock images and graphics instantly',
      icon: ImageIcon,
      iconColor: 'text-gray-400'
    }
  ];
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-6 left-6 w-80 z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+1.5rem)]'} lg:translate-x-0`} 
           style={{ height: 'calc(100vh - 3rem)' }}>
        <div className="rounded-lg border text-card-foreground shadow-sm h-full backdrop-blur-xl bg-white/[0.02] border-white/10 overflow-hidden flex flex-col">
          <div className="flex flex-col space-y-1.5 p-6 border-b border-white/10 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="tracking-tight text-white text-lg font-semibold">nexabot</div>
                <p className="text-gray-400 text-sm">AI Content Generator</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-gray-400 hover:text-white"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 flex-1 overflow-y-auto dark-scrollbar pr-2" 
               style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) rgba(0,0,0,0.1)' }}>
            {/* API Key Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Key className="h-4 w-4 text-primary" />
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-white">
                  API Key
                </label>
              </div>
              <Input
                type="password"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                placeholder="Enter your API key..."
                value={apiKey}
                onChange={(e) => onApiKeyChange(e.target.value)}
              />
              <p className="text-xs text-gray-400 mt-1">Required for AI generation</p>
            </div>

            {/* AI Tools Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-primary" />
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium text-white">
                  AI Tools
                </label>
              </div>
              <div className="space-y-2">
                {aiTools.map((tool) => {
                  const IconComponent = tool.icon;
                  const isActive = activeTool === tool.id;
                  
                  return (
                    <button 
                      key={tool.id}
                      onClick={() => onToolChange?.(tool.id)}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10' 
                          : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
                          <IconComponent className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">{tool.name}</div>
                          <div className="text-xs text-gray-400 line-clamp-2">
                            {tool.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Back to Home Link */}
            <div className="pt-4 border-t border-white/10">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}