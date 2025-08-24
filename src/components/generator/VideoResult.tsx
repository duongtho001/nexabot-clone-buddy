import { Button } from "@/components/ui/button";
import { Download, Share2, Trash2, Play } from "lucide-react";

interface VideoResultProps {
  id: string;
  prompt: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  status: 'generating' | 'completed' | 'error';
  progress?: number;
  onDelete: (id: string) => void;
  onDownload: (id: string) => void;
  onShare: (id: string) => void;
}

export function VideoResult({
  id,
  prompt,
  videoUrl,
  thumbnailUrl,
  status,
  progress = 0,
  onDelete,
  onDownload,
  onShare
}: VideoResultProps) {
  return (
    <div className="group relative rounded-lg overflow-hidden bg-white/[0.02] border border-white/10 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.04]">
      {/* Video/Thumbnail */}
      <div className="aspect-video relative bg-gradient-to-br from-white/[0.05] to-transparent">
        {status === 'generating' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm text-white mb-2">Generating video...</p>
              <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{progress}% complete</p>
            </div>
          </div>
        )}
        
        {status === 'completed' && (
          <div className="relative">
            {thumbnailUrl ? (
              <img 
                src={thumbnailUrl} 
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Play className="w-12 h-12 text-primary" />
              </div>
            )}
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              >
                <Play className="w-6 h-6 mr-2" />
                Play Video
              </Button>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-400 text-2xl">×</span>
              </div>
              <p className="text-sm text-red-400">Generation failed</p>
              <p className="text-xs text-gray-400 mt-1">Please try again</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-white line-clamp-2 mb-3">{prompt}</p>
        
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === 'generating' ? 'bg-yellow-500/20 text-yellow-400' :
            status === 'completed' ? 'bg-green-500/20 text-green-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {status === 'generating' ? 'Generating' :
             status === 'completed' ? 'Completed' :
             'Error'}
          </span>
          
          <div className="text-xs text-gray-400">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Actions */}
        {status === 'completed' && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownload(id)}
              className="flex-1 bg-white/5 border-white/10 hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onShare(id)}
              className="flex-1 bg-white/5 border-white/10 hover:bg-white/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(id)}
              className="bg-white/5 border-white/10 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        )}
        
        {status === 'error' && (
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-white/5 border-white/10 hover:bg-white/10"
            onClick={() => onDelete(id)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}