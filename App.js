import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Burger from "./assets/burger.jpeg";

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hi</Text>
      <Text>
        WEL<Text style={{ color: "red" }}>COME</Text>
      </Text>

      <View style={styles.smallBox}></View>

      {/* <Image source={Burger} style={{ height: 200, width: 100 }} /> */}

      {/* <Image
        source={require("./assets/burger.jpeg")}
        style={{ height: 200, width: 100 }}
      /> */}

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1652270057861-6027ecd0302a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        }}
        style={{ height: 200, width: 100 }}
      />

      <Button title="Click me" />

      <TouchableOpacity
        style={{ padding: 16, backgroundColor: "red", borderRadius: 10 }}
      >
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{ padding: 16, backgroundColor: "red", borderRadius: 10 }}
      >
        <Text>Click me</Text>
      </TouchableHighlight>

      <TextInput
        value={name}
        onChangeText={handleChange}
        style={{ borderWidth: 1, borderColor: "green" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: "100%",
  },

  smallBox: {
    height: 100,
    width: 100,
    backgroundColor: "green",
  },

  text: {
    color: "red",
  },
});

// const styles = {
//   container: {
//     backgroundColor: "blue",
//     height: "100%",
//   },

//   smallBox: {
//     height: 100,
//     width: 100,
//     backgroundColor: "green",
//   },

//   text: {

//   }
// };

export default App;
