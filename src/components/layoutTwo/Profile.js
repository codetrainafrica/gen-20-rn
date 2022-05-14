import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          }}
          style={styles.image}
        />
      </View>
      <View
        style={{
          height: "40%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text style={{ fontSize: 18 }}>Welcome back</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Korkor</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default Profile;
