import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Example2 from "./src/components/Example2";
import ExampleFlatList from "./src/components/FlatList";
import LayoutOne from "./src/components/LayoutOne";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import { AntDesign } from "@expo/vector-icons";
import Details from "./src/screens/Details";
import Main from "./src/screens/Main";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: { backgroundColor: "red" },
          headerRight: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
