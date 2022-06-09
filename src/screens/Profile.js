import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Profile = (props) => {
  const navigateToSettings = () => {
    props.navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToSettings}
        style={{ padding: 16, backgroundColor: "tomato" }}
      >
        <Text>Profile</Text>
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

export default Profile;
