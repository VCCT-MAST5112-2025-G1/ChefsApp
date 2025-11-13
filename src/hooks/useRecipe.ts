import { useState, useCallback, useMemo } from "react";
import type { RecipeData } from "../types/recipeData";

export function useRecipes() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  const addRecipe = useCallback((recipe: RecipeData) => {
    setRecipes((current) => [...current, recipe]);
  }, []);

  const clearRecipes = useCallback(() => {
    setRecipes([]);
  }, []);

  const removeRecipeAtIndex = useCallback((index: number) => {
    setRecipes((current) => current.filter((_, i) => i !== index));
  }, []);

  const totalRecipes = useMemo(() => recipes.length, [recipes]);

  return {
    recipes,
    totalRecipes,
    addRecipe,
    clearRecipes,
    removeRecipeAtIndex,
  };
}
