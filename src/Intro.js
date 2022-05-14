import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  StyleSheet,
} from "react-native";
import car from "./assets/car.jpeg";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (text) => {
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity>
        <Text style={styles.title}>Hello</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          Lorem ipsum dolor
        </Text>

        <View style={{ height: 20, backgroundColor: "red" }}></View>
        {/* <Image source={car} style={{ height: 100, width: 100 }} /> */}
        {/* <Image
        source={require("./assets/car.jpeg")}
        style={{ height: 100, width: 100 }}
      /> */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
          style={{ height: 100, width: 100 }}
        />
      </TouchableOpacity>

      {/* <Button title="CLick me" /> */}

      <TouchableOpacity style>
        <Text>Click me</Text>
      </TouchableOpacity>

      <TextInput value={name} onChangeText={handleChange} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
  },

  title: {
    color: "green",
  },
});

export default App;
