import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const Class2 = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const handleEmailChange = (text) => {
    SetEmail(text);
  };

  const handlePasswordChange = (text) => {
    SetPassword(text);
  };

  const handelSubmit = () => {
    console.log(email, password);
  };

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handelSubmit}>
        <Text>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#777",
    width: "50%",
  },
});

export default Class2;
