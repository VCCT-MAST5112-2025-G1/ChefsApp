import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { Picker } from "@react-native-picker/picker";

type AddRecipeNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddRecipe"
>;

type Props = {
  navigation: AddRecipeNavigationProp;
};

export default function AddRecipe({ navigation }: Props) {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [courseType, setCourseType] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!dishName || !description || !courseType || !price) {
      Alert.alert("Error", "Please fill in all fields");
    } else {
      const recipeData = {
        dishName,
        description,
        courseType,
        price,
      };

      navigation.navigate("RecipesList", {
        recipeData: { dishName, description, courseType, price },
      });

      // Reset the form
      setDishName("");
      setDescription("");
      setCourseType("");
      setPrice("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Add a New Recipe</Text>

        {/* Dish Name */}
        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName}
        />

        {/* Description */}
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Course Type */}
        <Text style={styles.label}>Select Course Type</Text>
        <Picker
          selectedValue={courseType}
          style={styles.picker}
          onValueChange={(itemValue) => setCourseType(itemValue)} // Correct usage
        >
          <Picker.Item label="Appetizer" value="Appetizer" />
          <Picker.Item label="Main Course" value="Main Course" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>

        {/* Price */}
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        {/* Submit Button */}
        <Button title="Submit Recipe" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  form: {
    width: "100%",
    maxWidth: 600,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
