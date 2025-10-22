import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";  // Import RouteProp
import { RootStackParamList } from "../types/navigation";  // Import RootStackParamList
import { RecipeData } from "../types/recipeData";  // Import RecipeData

// Define the type for the route params
type RecipesListProps = {
  route: RouteProp<RootStackParamList, "RecipesList">;  // Correctly type the route and params
  navigation: any; // Type navigation if needed
};

export default function RecipesList({ route, navigation }: RecipesListProps) {
  const [recipes, setRecipes] = useState<RecipeData[]>([]); // Ensure recipes is an array of RecipeData

  useEffect(() => {
    // Check if recipeData is passed in the route params
    if (route.params?.recipeData) {
      setRecipes((prevRecipes) => [...prevRecipes, route.params.recipeData]);
    }
  }, [route.params?.recipeData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe List</Text>

      {recipes.length === 0 ? (
        <Text>No recipes added yet.</Text>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.recipeItem}>
              <Text style={styles.dishName}>{item.dishName}</Text>
              <Text>{item.description}</Text>
              <Text>Course: {item.courseType}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  recipeItem: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dishName: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
