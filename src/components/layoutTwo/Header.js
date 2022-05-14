import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name="menu" size={24} color="black" />

      <View style={styles.iconContainer}>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "rgb(247,244,252)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
