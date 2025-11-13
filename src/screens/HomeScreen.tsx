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

type HomeNav = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNav>();

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
    marginLeft:-5,
    marginRight: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
