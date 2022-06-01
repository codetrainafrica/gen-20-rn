import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import { FlatList } from "react-native";

const Home = () => {
  const { navigate } = useNavigation();

  //   const navigateToProfile = () => {
  //     navigate("Profile");
  //   };

  const data = [
    { name: "kofi", age: 25 },
    { name: "james", age: 25 },
    { name: "mary", age: 25 },
    { name: "ama", age: 25 },
    { name: "joseph", age: 25 },
    { name: "kelvin", age: 25 },
    { name: "mike", age: 25 },
    { name: "rita", age: 25 },
    { name: "esther", age: 25 },
    { name: "kofi", age: 25 },
  ];

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate("Details", {
                details: item,
              })
            }
            style={{ padding: 16 }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
