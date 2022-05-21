import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const List = () => {
  const users = new Array(10).fill({
    name: "kofi",
    age: 43,
    image: { uri: "" },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(user, index) => user.name + "-" + index}
        renderItem={({ item }) => {
          return <Item user={item} />;
        }}
      />
    </View>
  );
};

const Item = ({ user }) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <Image source={user.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
