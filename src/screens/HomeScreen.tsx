import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../types/navigation";
import { useMenuItemsContext } from "../hooks/MenuItemContext";

type HomeNav = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNav>();
  const { recipes } = useMenuItemsContext();

  const getAverageFor = (course: "Starter" | "Main" | "Dessert") => {
    const filtered = recipes.filter((r: any) => r.courseType === course);

    if (filtered.length === 0) {
      return "R 0.00";
    }

    const sum = filtered.reduce((acc: number, r: any) => {
      const priceNum = parseFloat(r.price || "0");
      return acc + (isNaN(priceNum) ? 0 : priceNum);
    }, 0);

    const avg = sum / filtered.length;
    return "R " + avg.toFixed(2);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/home.png")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={2}
    >
      <View style={styles.container}>
       
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Average price per course</Text>

          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Starters</Text>
            <Text style={styles.statsValue}>{getAverageFor("Starter")}</Text>
          </View>

          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Mains</Text>
            <Text style={styles.statsValue}>{getAverageFor("Main")}</Text>
          </View>

          <View style={styles.statsRow}>
            <Text style={styles.statsLabel}>Desserts</Text>
            <Text style={styles.statsValue}>{getAverageFor("Dessert")}</Text>
          </View>
        </View>

        
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginBottom: 16,
  },
  statsCard: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    padding: 16,
    borderRadius: 14,
    width: "85%",
    marginBottom: 40,
  },
  statsTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  statsLabel: {
    color: "white",
    fontSize: 14,
  },
  statsValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
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
    backgroundColor: "rgba(255, 112, 67, 0.9)",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 150,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
