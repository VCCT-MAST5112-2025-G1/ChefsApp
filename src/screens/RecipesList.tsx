import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useMenuItemsContext } from "../hooks/MenuItemContext";

export default function RecipesList() {
  const { recipes, clearRecipes } = useMenuItemsContext();

  const hasRecipes = recipes && recipes.length > 0;

  const handleClear = () => {
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

        {hasRecipes && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
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
    marginBottom: 16,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
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
