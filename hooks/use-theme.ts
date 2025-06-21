"use client";

import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Récupérer le thème sauvegardé ou utiliser la préférence système
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Utiliser le thème sombre par défaut pour éviter le flash
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      
      // Supprimer toutes les classes de thème d'abord
      root.classList.remove("light", "dark");
      
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
      
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted
  };
}; 