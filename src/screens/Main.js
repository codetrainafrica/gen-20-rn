import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
  return <View></View>;
};

export default Main;
