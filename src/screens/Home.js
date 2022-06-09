import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate("Settings");
  };

  const users = [
    { name: "joe", image: require("../../assets/person.jpeg") },
    { name: "kofi", image: require("../../assets/person.jpeg") },
    { name: "kwame", image: require("../../assets/person.jpeg") },
    { name: "james", image: require("../../assets/person.jpeg") },
    { name: "ama", image: require("../../assets/person.jpeg") },
    { name: "mary", image: require("../../assets/person.jpeg") },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={({ name }) => name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", {
                details: item,
              })
            }
            style={{
              padding: 16,
              backgroundColor: "lightblue",
              marginVertical: 4,
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

export default Home;
