import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Key, Sparkles, Video, Film, Mic, Image as ImageIcon, X, House } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ apiKey, onApiKeyChange, isOpen, onClose }: SidebarProps) {
  return (
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
              {/* Video Generator - Active */}
              <button className="w-full p-3 rounded-lg text-left transition-all duration-200 bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Video Generator</div>
                    <div className="text-xs text-gray-400 line-clamp-2">
                      Create stunning videos from text prompts using Google Veo models
                    </div>
                  </div>
                </div>
              </button>

              {/* Filmmaker with Veo 3 */}
              <button className="w-full p-3 rounded-lg text-left transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
                    <Film className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Filmmaker with Veo 3</div>
                    <div className="text-xs text-gray-400 line-clamp-2">
                      Create multi-scene cinematic stories with detailed JSON prompts
                    </div>
                  </div>
                </div>
              </button>

              {/* Voice Over Generator */}
              <button className="w-full p-3 rounded-lg text-left transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
                    <Mic className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Voice Over Generator</div>
                    <div className="text-xs text-gray-400 line-clamp-2">
                      Generate natural-sounding voice overs
                    </div>
                  </div>
                </div>
              </button>

              {/* Microstock Generator */}
              <button className="w-full p-3 rounded-lg text-left transition-all duration-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
                    <ImageIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Microstock Generator</div>
                    <div className="text-xs text-gray-400 line-clamp-2">
                      Create high-quality stock images
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <Link to="/">
              <Button
                variant="outline"
                className="w-full bg-white/5 border-white/10 text-white hover:bg-primary/20 hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <House className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}