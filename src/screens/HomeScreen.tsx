import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../types/navigation";

type HomeNav = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNav>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Chef’s App</Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.button, { alignSelf: "flex-start" }]}
          onPress={() => navigation.navigate("RecipesList")}
        >
          <Text style={styles.buttonText}>Browse Recipes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { alignSelf: "flex-end" }]}
          onPress={() => navigation.navigate("AddRecipe")}
        >
          <Text style={styles.buttonText}>Add a Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf0",
    alignItems: "center",
    paddingTop: 80,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },

  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#ff7043",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    width: 150,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
