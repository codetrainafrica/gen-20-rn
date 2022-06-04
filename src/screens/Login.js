import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = (props) => {
  const { navigate } = useNavigation();
  // const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TouchableOpacity
        onPress={() =>
          navigate("Profile", {
            id: "vhjxkcvyusdavfcuysdgvyuxcbvyuxbvcyuz",
            name: "dsbjckbadukfcbadkuc",
          })
        }
        style={{ padding: 16, backgroundColor: "tomato" }}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
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

export default Login;
