import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import RecipesList from "./screens/RecipesList";
import AddRecipe from "./screens/AddRecipe";
import { RootStackParamList } from "./types/navigation"; // Import navigation param list

const Stack = createStackNavigator<RootStackParamList>(); // Type the stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipesList" component={RecipesList} />
        <Stack.Screen name="AddRecipe" component={AddRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
