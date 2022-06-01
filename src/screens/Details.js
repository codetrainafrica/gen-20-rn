import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Details = ({ route }) => {
  const userDetails = route.params.details;
  return (
    <View style={styles.container}>
      <Text>{userDetails.name}</Text>
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

export default Details;
