import { useState, useMemo, useCallback } from "react";
import type { RecipeData } from "../types/recipeData";

export function useRecipes() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  const addRecipe = useCallback((recipe: RecipeData) => {
    setRecipes((current) => [...current, recipe]);
  }, []);

  const clearRecipes = useCallback(() => {
    setRecipes([]);
  }, []);

  const totalRecipes = useMemo(() => recipes.length, [recipes]);

  return {
    recipes,
    totalRecipes,
    addRecipe,
    clearRecipes,
  };
}
