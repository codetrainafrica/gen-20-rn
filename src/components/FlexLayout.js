import React from "react";
import { View, StyleSheet } from "react-native";

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
      <View
        style={{
          flex: 3,
          backgroundColor: "green",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={[styles.box, { alignSelf: "flex-end" }]}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "red",
    justifyContent: "space-between",
  },

  box: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    borderRadius: 10,
  },
});

export default FlexLayout;
