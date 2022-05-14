import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        flex: 15,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          height: "100%",
          padding: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="menu" size={24} color="black" />
      </View>
      <View
        style={{
          height: "100%",
          padding: 8,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <MaterialCommunityIcons
          name="electric-switch-closed"
          size={24}
          color="black"
        />

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
          style={{
            height: 50,
            width: 50,
            marginHorizontal: 16,
            borderRadius: 25,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
