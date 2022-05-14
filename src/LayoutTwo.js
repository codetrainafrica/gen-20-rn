import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import Card from "./components/layoutTwo/Card";
import Header from "./components/layoutTwo/Header";
import Profile from "./components/layoutTwo/Profile";
import {
  FontAwesome,
  Feather,
  Octicons,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const LayoutTwo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.profile}>
        <Profile />
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: "rgb(255,241,205)",
            borderRadius: 20,
            marginVertical: 4,
          },
        ]}
      >
        <Card
          value={365.365}
          title="Amount"
          cardName="Across regions"
          subtitle="Avg daily(hrs)"
          imageSource="https://o.remove.bg/downloads/95cd254f-97b4-455f-833e-4bf265c7baf3/png-transparent-diagram-bar-chart-bar-miscellaneous-angle-text-removebg-preview.png"
          trend={<Feather name="trending-up" size={24} color="#d39c3f" />}
          icon={<FontAwesome name="dollar" size={24} color="purple" />}
        />
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: "rgb(253,213,222)",
            borderRadius: 20,
            marginVertical: 4,
          },
        ]}
      >
        <Card
          value="395 675 21"
          title="Shipment"
          cardName="Distribution"
          subtitle="Bil amount(s)"
          imageSource="https://o.remove.bg/downloads/9f3c7721-5cc5-45c6-9aa5-ff4e471a9e3b/233-2334056_heart-beat-rate-png-transparent-png-removebg-preview.png"
          trend={<Octicons name="pulse" size={24} color="pink" />}
          icon={<Feather name="share" size={24} color="green" />}
        />
      </View>
      <View style={styles.bottomNav}>
        <AntDesign name="home" size={24} color="black" />
        <Entypo name="bar-graph" size={24} color="black" />
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
        <AntDesign name="wallet" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  header: {
    flex: 1,
  },

  profile: {
    flex: 3,
  },

  card: {
    flex: 2.5,
  },

  bottomNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default LayoutTwo;
