
import { RecipeData } from './recipeData';

export type RootStackParamList = {
  Home: undefined;
  RecipesList: { recipeData: RecipeData };  // Ensure the params are correctly defined for RecipesList
  AddRecipe: undefined;
};
