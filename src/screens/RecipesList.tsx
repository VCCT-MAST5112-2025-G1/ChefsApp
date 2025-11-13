import React from "react";
import { View, Text, FlatList } from "react-native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";

export default function RecipesList() {
  const { recipes } = useMenuItemsContext();

  return (
    <View>
      <Text>All Dishes</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>Dish: {item.dishName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Course: {item.courseType}</Text>
            <Text>Price: R {item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
