import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../types/navigation";

type HomeNav = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNav>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RecipesList")}
      >
        <Text style={styles.buttonText}>Browse Recipes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddRecipe")}
      >
        <Text style={styles.buttonText}>Add a Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffaf0",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff7043",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
