import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const Example2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <ScrollView horizontal style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ height: 150, backgroundColor: "yellow" }}>
        <View style={{ flex: 1, backgroundColor: "brown" }}></View>
      </View>
      <View style={{ height: 150, backgroundColor: "green" }}></View>
    </ScrollView>
    // <ScrollView style={styles.container}>
    //   <Text>Email</Text>
    //   <TextInput
    //     value={email}
    //     placeholder="Enter your email"
    //     style={styles.textInput}
    //     onChangeText={handleEmailChange}
    //     keyboardType="email-address"
    //   />

    //   <Text>Password</Text>
    //   <TextInput
    //     value={password}
    //     placeholder="Enter your password"
    //     style={styles.textInput}
    //     onChangeText={handlePasswordChange}
    //     secureTextEntry={true}
    //   />
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#777",
  },
});

export default Example2;
