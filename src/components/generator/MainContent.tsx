import { Button } from "@/components/ui/button";
import { Menu, Settings, Video, Film, Mic, Image as ImageIcon } from "lucide-react";
import { VideoResult } from "@/components/generator/VideoResult";
import { VideoResult as VideoResultType, AITool } from "@/types/generator";

interface MainContentProps {
  videoResults: VideoResultType[];
  activeTool: AITool;
  onOpenSidebar: () => void;
  onOpenSettings: () => void;
  onDeleteResult: (id: string) => void;
  onDownloadResult: (id: string) => void;
  onShareResult: (id: string) => void;
}

export function MainContent({ 
  videoResults,
  activeTool,
  onOpenSidebar, 
  onOpenSettings,
  onDeleteResult,
  onDownloadResult,
  onShareResult
}: MainContentProps) {
  const completedCount = videoResults.filter(r => r.status === 'completed').length;
  const generatingCount = videoResults.filter(r => r.status === 'generating').length;

  const getToolIcon = () => {
    switch (activeTool) {
      case 'video': return Video;
      case 'filmmaker': return Film;
      case 'voice': return Mic;
      case 'microstock': return ImageIcon;
      default: return Video;
    }
  };

  const getToolName = () => {
    switch (activeTool) {
      case 'video': return 'Video Generator';
      case 'filmmaker': return 'Filmmaker';
      case 'voice': return 'Voice Over Generator';
      case 'microstock': return 'Microstock Generator';
      default: return 'AI Generator';
    }
  };

  const getContentTitle = () => {
    switch (activeTool) {
      case 'video': return 'Video Gallery';
      case 'filmmaker': return 'Film Projects';
      case 'voice': return 'Voice Library';
      case 'microstock': return 'Image Collection';
      default: return 'Content Gallery';
    }
  };

  const ToolIcon = getToolIcon();

  return (
    <div className="lg:ml-[22rem] min-h-screen flex flex-col">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl">
        <Button
          variant="ghost"
          className="text-white"
          onClick={onOpenSidebar}
        >
          <Menu className="h-4 w-4 mr-2" />
          Tools
        </Button>

        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-r from-white/10 to-white/5">
            <ToolIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">{getToolName()}</div>
          </div>
        </div>

        <Button
          variant="ghost"
          className="text-white"
          onClick={onOpenSettings}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-0">
        <div className="p-4 lg:p-8 pb-0">
          <div className="rounded-lg border text-card-foreground shadow-sm h-[calc(100vh-20rem)] lg:h-[calc(100vh-22rem)] backdrop-blur-xl bg-white/[0.02] border-white/10 flex flex-col">
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5">
                  <ToolIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">{getContentTitle()}</h1>
                  <p className="text-sm text-gray-400">
                    {completedCount} completed • {generatingCount} generating
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 lg:p-6 dark-scrollbar">
              {videoResults.length === 0 ? (
                /* Empty State */
                <div className="h-full flex items-center justify-center text-center">
                  <div className="max-w-md">
                    <ToolIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No content yet</h3>
                    <p className="text-gray-400 mb-6">Generate your first content to get started!</p>
                    
                    {/* Quick Start Tips */}
                    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4 text-left">
                      <h4 className="text-sm font-medium text-white mb-2">💡 Quick Tips:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        <li>• Be specific with your video descriptions</li>
                        <li>• Include camera angles and movements</li>
                        <li>• Mention lighting and atmosphere</li>
                        <li>• Specify character actions and emotions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* Video Results Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {videoResults.map((result) => (
                    <VideoResult
                      key={result.id}
                      {...result}
                      onDelete={onDeleteResult}
                      onDownload={onDownloadResult}
                      onShare={onShareResult}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}