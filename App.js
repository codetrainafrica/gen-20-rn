import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LayoutOne from "./src/LayoutOne";
import LayoutTwo from "./src/LayoutTwo";

const App = () => {
  return <LayoutTwo />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
