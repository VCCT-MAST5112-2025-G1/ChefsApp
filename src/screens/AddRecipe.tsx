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
import { Picker } from "@react-native-picker/picker";
import { useMenuItemsContext } from "../hooks/MenuItemContext";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../types/navigation";

type AddRecipeNav = StackNavigationProp<RootStackParamList, "AddRecipe">;

export default function AddRecipe() {
  const navigation = useNavigation<AddRecipeNav>();
  const { addRecipe } = useMenuItemsContext();

  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [courseType, setCourseType] = useState<string>("Starter");
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
      source={require("../../assets/images/home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 100}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Text style={styles.title}>Add a New Recipe</Text>

            <Text style={styles.label}>Dish Name</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Creamy Mushroom Pasta"
              placeholderTextColor="#777"
              value={dishName}
              onChangeText={setDishName}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.multiline]}
              placeholder="Short description of the dish…"
              placeholderTextColor="#777"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <Text style={styles.label}>Course Type</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={courseType}
                onValueChange={(itemValue) => setCourseType(itemValue)}
                style={styles.picker}
                dropdownIconColor="#333"
              >
                <Picker.Item label="Starter" value="Starter" />
                <Picker.Item label="Main" value="Main" />
                <Picker.Item label="Dessert" value="Dessert" />
                <Picker.Item label="Drink" value="Drink" />
                <Picker.Item label="Side" value="Side" />
              </Picker>
            </View>

            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 120"
              placeholderTextColor="#777"
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
    paddingBottom: 40,
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
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  multiline: {
    height: 90,
    textAlignVertical: "top",
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 14,
    overflow: "hidden",
  },
  picker: {
    height: 48,
    width: "100%",
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
