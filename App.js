import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Cat from "./assets/cat.jpeg";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hello</Text>
      <Image
        // source={Cat}
        // source={require("./assets/cat.jpeg")}
        source={{
          uri: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
        }}
        style={{ height: 100, width: 100 }}
      />

      <Button title="Click me" />

      <TouchableOpacity
        style={{
          height: 200,
          width: 200,
          backgroundColor: "tomato",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>

      <TextInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
  },
});

export default App;
