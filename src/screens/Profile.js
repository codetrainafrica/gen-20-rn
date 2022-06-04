import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const users = [
    { name: "Joe", age: 15 },
    { name: "James", age: 15 },
    { name: "Kelvin", age: 15 },
    { name: "Ama", age: 15 },
    { name: "Mary", age: 15 },
  ];

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={({ name }) => `${name}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigate("Details", {
                details: item,
              })
            }
            style={{
              padding: 16,
              backgroundColor: "lightblue",
              marginVertical: 6,
            }}
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

export default Profile;
