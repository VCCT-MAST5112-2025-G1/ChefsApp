import { useState, useCallback, useMemo } from "react";
import type { RecipeData } from "../types/recipeData";

export interface RecipeFormValues {
  dishName: string;
  description: string;
  courseType: string;
  price: string;
}

export function useRecipes() {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  const addRecipe = useCallback((values: RecipeFormValues) => {
    const newRecipe: RecipeData = {
      id: Date.now().toString(),
      dishName: values.dishName.trim(),
      description: values.description.trim(),
      courseType: values.courseType.trim(),
      price: values.price.trim(),
    };

    setRecipes((prev) => [...prev, newRecipe]);
  }, []);

  const totalRecipes = useMemo(() => recipes.length, [recipes]);

  return { recipes, addRecipe, totalRecipes };
}
