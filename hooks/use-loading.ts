"use client";

import { useState, useEffect } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement minimum pour une meilleure UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  return { isLoading, setIsLoading };
}; 