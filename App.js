import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Example2 from "./src/components/Example2";
import ExampleFlatList from "./src/components/FlatList";
import LayoutOne from "./src/components/LayoutOne";

const App = () => {
  return <ExampleFlatList />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
