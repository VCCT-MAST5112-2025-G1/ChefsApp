import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MenuItemsProvider } from "./src/hooks/MenuItemContext";

import HomeScreen from "./src/screens/HomeScreen";
import RecipesList from "./src/screens/RecipesList";
import AddRecipe from "./src/screens/AddRecipe";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuItemsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RecipesList" component={RecipesList} />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuItemsProvider>
  );
}
