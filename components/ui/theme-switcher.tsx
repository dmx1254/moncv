"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-200 dark:bg-black/50 border border-cyan-400/30 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-cyan-400/20 rounded-full"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-12 h-6 bg-gray-200 dark:bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center transition-all duration-300 hover:border-cyan-400 overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Toggle handle */}
      <div 
        className={`relative z-10 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-300 flex items-center justify-center ${
          theme === "light" ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {/* Icon inside handle */}
        <div className="w-2 h-2 text-white">
          {theme === "dark" ? (
            <Moon className="w-2 h-2" />
          ) : (
            <Sun className="w-2 h-2" />
          )}
        </div>
        
        {/* Glow behind handle */}
        <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
      </div>
      
      {/* Background icons */}
      <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-cyan-400/50 dark:text-cyan-400/50 text-xs">
        <Moon className="w-2 h-2" />
      </div>
      <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 text-purple-400/50 dark:text-purple-400/50 text-xs">
        <Sun className="w-2 h-2" />
      </div>
    </button>
  );
};