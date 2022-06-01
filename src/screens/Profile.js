import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Profile = (props) => {
  const navigateToSettings = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <TouchableOpacity onPress={navigateToSettings} style={{ padding: 16 }}>
        <Text>Go back</Text>
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
