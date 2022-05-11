import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cat from "./assets/cat.jpeg";
import FlexLayout from "./src/components/FlexLayout";
import LayoutOne from "./src/components/LayoutOne";
import LayoutTwo from "./src/components/LayoutTwo";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* // <FlexLayout /> */}
      {/* <LayoutOne /> */}
      <LayoutTwo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
});

export default App;
