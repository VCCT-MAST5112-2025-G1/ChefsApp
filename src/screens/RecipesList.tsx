import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";
import type { StoredRecipe } from "../hooks/useRecipe";

type FilterType = "All" | "Starter" | "Main" | "Dessert";

export default function RecipesList() {
  const { recipes, clearRecipes, removeRecipe } = useMenuItemsContext();

  const [filter, setFilter] = useState<FilterType>("All");

  const filteredRecipes =
    filter === "All"
      ? recipes
      : recipes.filter((r: StoredRecipe) => r.courseType === filter);

  const hasRecipes = filteredRecipes && filteredRecipes.length > 0;

  const handleClearAll = () => {
    clearRecipes();
  };

  return (
    <ImageBackground
      source={require("../../assets/images/home.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={1}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Browse Recipes</Text>

        <View style={styles.filterRow}>
          {(["All", "Starter", "Main", "Dessert"] as FilterType[]).map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.filterButton,
                  filter === item && styles.filterButtonActive,
                ]}
                onPress={() => setFilter(item)}
              >
                <Text
                  style={[
                    styles.filterText,
                    filter === item && styles.filterTextActive,
                  ]}
                >
                  {item === "All"
                    ? "All"
                    : item === "Starter"
                    ? "Starters"
                    : item === "Main"
                    ? "Mains"
                    : "Desserts"}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>

        {hasRecipes ? (
          <ScrollView contentContainerStyle={styles.listContainer}>
            {filteredRecipes.map((item: StoredRecipe) => (
              <View key={item.id} style={styles.card}>
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

                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeRecipe(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
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

        {recipes.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
            <Text style={styles.clearButtonText}>Clear Recipes</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 3,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  filterButtonActive: {
    backgroundColor: "rgba(255, 112, 67, 0.9)",
  },
  filterText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
  },
  filterTextActive: {
    fontWeight: "700",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
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
  removeButton: {
    alignSelf: "flex-end",
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255, 64, 64, 0.12)",
  },
  removeButtonText: {
    color: "#d32f2f",
    fontSize: 13,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  clearButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255, 64, 64, 0.9)",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 999,
    elevation: 4,
  },
  clearButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
