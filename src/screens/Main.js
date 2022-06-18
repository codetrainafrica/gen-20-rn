import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QRCode } from "react-native-custom-qr-codes-expo";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Screen} />
      <Tab.Screen name="More" component={Screen} />
      <Tab.Screen name="Stories" component={Screen} />
    </Tab.Navigator>
  );
};

const Screen = () => {
  const userInfo = {
    name: "John Doe",
    email: "j@email.com",
    role: "CEO",
    phone: "123456789",
    location: "New York",
    profileImage: require("../../assets/person.jpeg"),
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <QRCode content={JSON.stringify(userInfo)} />
    </View>
  );
};

export default Main;
