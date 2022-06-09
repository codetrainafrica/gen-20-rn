import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const More = () => {
  return (
    <View>
      <Text>More</Text>
    </View>
  );
};

const Discover = () => {
  return (
    <View>
      <Text>Discover</Text>
    </View>
  );
};

export default Main;
