import { Button } from "@/components/ui/button";
import { Menu, Settings, Video } from "lucide-react";

interface MainContentProps {
  onOpenSidebar: () => void;
  onOpenSettings: () => void;
}

export function MainContent({ onOpenSidebar, onOpenSettings }: MainContentProps) {
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
            <Video className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Video Generator</div>
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
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">Content Gallery</h1>
                  <p className="text-sm text-gray-400">
                    0 completed • 0 generating
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-hidden p-2 lg:p-6">
              <div className="h-full flex items-center justify-center text-center">
                <div className="max-w-md">
                  <Video className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No content yet</h3>
                  <p className="text-gray-400 mb-6">Generate your first content to get started!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}