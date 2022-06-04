import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Home = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ tabBarIcon: () => null }}
      />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Discover = () => {
  return <></>;
};

const Chat = () => {
  return <></>;
};

const Settings = () => {
  return <></>;
};

export default Home;
