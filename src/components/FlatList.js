import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const users = [
  {
    name: "Joe",
    age: 15,
    image: require("../../assets/person.jpeg"),
  },

  {
    name: "Mary",
    age: 16,
    image: require("../../assets/person.jpeg"),
  },

  {
    name: "Ama",
    age: 15,
    image: require("../../assets/person.jpeg"),
  },

  {
    name: "Kelvin",
    age: 17,
    image: require("../../assets/person.jpeg"),
  },

  {
    name: "Max",
    age: 14,
    image: require("../../assets/person.jpeg"),
  },
];

const ExampleFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        //   horizontal={true}
        data={users}
        keyExtractor={(user, index) => {
          return user.name + index;
        }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              marginVertical: 2,
              backgroundColor: "#EEE",
              flexDirection: "row",
            }}
          >
            <Image
              source={item.image}
              style={{ height: 50, width: 50, borderRadius: 25 }}
            />

            <Text>{item.name}</Text>
          </View>
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

export default ExampleFlatList;
