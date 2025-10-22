
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Chef's App</Text>

      {/* Button to navigate to RecipesList */}
      <View style={styles.buttonContainer}>
        <Button
          title="Browse Recipes"
          onPress={() => navigation.navigate("RecipesList")}

        />
      </View>

      {/* Button to navigate to AddRecipe */}
      <View style={styles.buttonContainer}>
        <Button
          title="Add a Recipe"
          onPress={() => navigation.navigate("AddRecipe")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
