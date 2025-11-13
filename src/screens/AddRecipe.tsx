import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../types/navigation";

type AddRecipeNav = StackNavigationProp<RootStackParamList, "AddRecipe">;

export default function AddRecipe() {
  const navigation = useNavigation<AddRecipeNav>();
  const { addRecipe } = useMenuItemsContext();

  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [courseType, setCourseType] = useState("");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    const newRecipe = {
      dishName,
      description,
      courseType,
      price,
    };

    addRecipe(newRecipe);
    navigation.navigate("RecipesList");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/recipe.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={1}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>Add a New Recipe</Text>

            <TextInput
              style={styles.input}
              placeholder="Dish Name"
              placeholderTextColor="#666"
              value={dishName}
              onChangeText={setDishName}
            />

            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Description"
              placeholderTextColor="#666"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <TextInput
              style={styles.input}
              placeholder="Course Type (Starter, Main, Dessert...)"
              placeholderTextColor="#666"
              value={courseType}
              onChangeText={setCourseType}
            />

            <TextInput
              style={styles.input}
              placeholder="Price"
              placeholderTextColor="#666"
              value={price}
              onChangeText={setPrice}
              keyboardType="number-pad"
            />

            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save Recipe</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.88)",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  multiline: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#FF7043",
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});
