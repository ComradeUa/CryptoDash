import { useState, useEffect } from "react";

export const useFavorites = (key: string = "favorites") => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favorites));
  }, [favorites, key]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return { favorites, toggleFavorite };
};
