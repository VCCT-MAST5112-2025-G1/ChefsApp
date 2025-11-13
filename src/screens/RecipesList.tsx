import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";

export default function RecipesList() {
  // This comes from useRecipes() via MenuItemsProvider
  const { recipes } = useMenuItemsContext();

  const hasRecipes = recipes && recipes.length > 0;

  return (
    <ImageBackground
      source={require("../../assets/images/home.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={1}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Browse Recipes</Text>

        {hasRecipes ? (
          <ScrollView contentContainerStyle={styles.listContainer}>
            {recipes.map((item: any, index: number) => (
              <View key={item.id ?? index.toString()} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.dishName}>
                    {item.dishName || "Untitled dish"}
                  </Text>

                  {item.courseType ? (
                    <Text style={styles.courseType}>{item.courseType}</Text>
                  ) : null}
                </View>

                {item.description ? (
                  <Text style={styles.description}>{item.description}</Text>
                ) : null}

                {item.price ? (
                  <Text style={styles.price}>R {item.price}</Text>
                ) : null}
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No recipes yet. Go to “Add a Recipe” to create your first dish.
            </Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    flexShrink: 1,
    marginRight: 8,
  },
  courseType: {
    fontSize: 13,
    fontWeight: "600",
    color: "#FF7043",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#333",
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
