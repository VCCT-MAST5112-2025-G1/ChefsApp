import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";

export default function AddRecipe() {
  const navigation = useNavigation();
  const { addRecipe } = useMenuItemsContext();

  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [courseType, setCourseType] = useState("");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    addRecipe({ dishName, description, courseType, price });
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Course Type"
        value={courseType}
        onChangeText={setCourseType}
      />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
