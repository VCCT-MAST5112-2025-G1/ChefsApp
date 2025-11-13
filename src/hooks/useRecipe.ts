import { useState, useCallback, useMemo } from "react";
import type { RecipeData } from "../types/recipeData";

export type StoredRecipe = RecipeData & { id: string };

export function useRecipes() {
  const [recipes, setRecipes] = useState<StoredRecipe[]>([]);

  const addRecipe = useCallback((recipe: RecipeData) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2, 8);
    setRecipes((current) => [...current, { ...recipe, id }]);
  }, []);

  const clearRecipes = useCallback(() => {
    setRecipes([]);
  }, []);

  const removeRecipe = useCallback((id: string) => {
    setRecipes((current) => current.filter((r) => r.id !== id));
  }, []);

  const totalRecipes = useMemo(() => recipes.length, [recipes]);

  return {
    recipes,
    totalRecipes,
    addRecipe,
    clearRecipes,
    removeRecipe,
  };
}
