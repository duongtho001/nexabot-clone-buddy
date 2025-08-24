import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Sparkles, Send, Image as ImageIcon, Key, ChevronUp } from "lucide-react";
import { useState } from "react";

import { AITool } from "@/types/generator";

interface BottomPromptInputProps {
  prompt: string;
  isGenerating: boolean;
  apiKey: string;
  activeTool: AITool;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  onOpenSettings: () => void;
}

export function BottomPromptInput({
  prompt,
  isGenerating,
  apiKey,
  activeTool,
  onPromptChange,
  onGenerate,
  onOpenSettings
}: BottomPromptInputProps) {

  const getPlaceholderText = () => {
    switch (activeTool) {
      case 'video':
        return "Tell me what you want to create with Video Generator...";
      case 'filmmaker':
        return "Describe your cinematic story for Filmmaker...";
      case 'voice':
        return "Enter text for Voice Over Generator...";
      case 'microstock':
        return "Describe the image for Microstock Generator...";
      default:
        return "Tell me what you want to create...";
    }
  };

  const getToolName = () => {
    switch (activeTool) {
      case 'video':
        return "Video Generator";
      case 'filmmaker':
        return "Filmmaker";
      case 'voice':
        return "Voice Over Generator";
      case 'microstock':
        return "Microstock Generator";
      default:
        return "AI Generator";
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:left-[22rem] z-40">
      <div className="p-4 lg:p-8">
        <div className="rounded-lg border text-card-foreground backdrop-blur-xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/10 shadow-2xl">
          <div className="p-4 lg:p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-lg pointer-events-none" />
            
            <div className="relative z-10">
              {/* Advanced Settings Toggle - Desktop Only */}
              <div className="mb-4 hidden lg:block">
                <Button
                  variant="ghost"
                  className="flex items-center justify-between w-full mb-3 group hover:bg-white/5"
                  onClick={onOpenSettings}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-primary" />
                    <label className="text-sm font-medium text-white cursor-pointer">Advanced Settings</label>
                    <span className="text-xs text-gray-400">({getToolName()})</span>
                  </div>
                  <ChevronUp className="h-4 w-4 text-gray-400" />
                </Button>
              </div>

              {/* Main Input Area */}
              <div className="flex gap-3">
                {/* Image Upload - Desktop */}
                <div className="hidden md:flex">
                  <input type="file" accept="image/*" className="hidden" id="image-upload-desktop" />
                  <label
                    htmlFor="image-upload-desktop"
                    className="h-[60px] w-12 border border-white/10 rounded-md bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center group"
                    title="Add image for image-to-video generation"
                  >
                    <ImageIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </label>
                </div>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <Textarea
                    className="min-h-[60px] max-h-32 resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-500 pr-20 md:pl-4 pl-12"
                    placeholder={getPlaceholderText()}
                    value={prompt}
                    onChange={(e) => onPromptChange(e.target.value)}
                  />

                  {/* Image Upload - Mobile */}
                  <div className="md:hidden">
                    <input type="file" accept="image/*" className="hidden" id="image-upload-mobile" />
                    <label
                      htmlFor="image-upload-mobile"
                      className="absolute bottom-2 left-2 h-8 w-8 p-0 rounded-md hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center group z-10"
                      title="Add image for image-to-video generation"
                    >
                      <ImageIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                    </label>
                  </div>

                  {/* Send Button */}
                  <Button
                    className="absolute bottom-2 right-2 h-8 w-8 p-0 bg-primary hover:bg-primary/90"
                    onClick={onGenerate}
                    disabled={isGenerating || !prompt.trim()}
                  >
                    {isGenerating ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={!prompt.trim()}
                    className="group relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 text-purple-200 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:to-pink-500/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                    title="Transform your prompt into a detailed cinematic description with professional camera work, lighting, character details, and atmosphere"
                  >
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    Cinematic Enhancement
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{prompt.length}/1000</span>
                </div>
              </div>

              {/* Warning Messages */}
              {activeTool !== 'video' && activeTool !== 'filmmaker' && !apiKey && (
                <p className="text-xs text-amber-400 mt-2 flex items-center gap-1">
                  <Key className="h-3 w-3" />
                  Please enter your API key to start generating content
                </p>
              )}

              <p className="text-xs text-gray-500 mt-2">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}