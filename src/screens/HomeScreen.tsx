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

  const getAverageFor = (course: string) => {
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
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

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
    width: 250,
    height: 250,
    marginTop: 170,
  },

  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
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
    backgroundColor: "rgba(255, 112, 67, 0.9)",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: 170,
    elevation: 4,
    marginLeft: -5,
    marginRight: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  statsCard: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 16,
    borderRadius: 14,
    marginTop: 10,
    width: "85%",
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
});
