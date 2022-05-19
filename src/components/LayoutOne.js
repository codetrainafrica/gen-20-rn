import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Feather,
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const LayoutOne = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Feather name="menu" size={24} color="black" />
        </View>

        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "lightblue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>

      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            overflow: "hidden",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776",
            }}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </View>
        <Text style={{ fontSize: 16 }}>Welcome back</Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Jay</Text>
      </View>

      <View
        style={{
          flex: 5,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: "48%",
            backgroundColor: "rgb(253,241,209)",
            borderRadius: 20,
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <FontAwesome name="dollar" size={24} color="black" />
              <View>
                <Text>Amount</Text>
                <Text>365.365</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                padding: 32,
              }}
            >
              <Feather name="trending-up" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Across Regions</Text>
              <Text style={{ fontSize: 15, color: "#777" }}>
                Avg daily (hrs)
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="bar-graph" size={24} color="black" />
            </View>
          </View>
        </View>

        <View
          style={{ height: "48%", backgroundColor: "pink", borderRadius: 20 }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Entypo name="share-alternative" size={24} color="black" />
              <View>
                <Text>Shipment</Text>
                <Text>395 675 21</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                padding: 32,
              }}
            >
              <MaterialCommunityIcons name="pulse" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18 }}>Distribution</Text>
              <Text style={{ fontSize: 15, color: "#777" }}>
                Bill amount(s)
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Entypo name="bar-graph" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <AntDesign name="home" size={24} color="black" />
        <Feather name="bar-chart-2" size={24} color="black" />
        <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
        <Ionicons name="ios-wallet-outline" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default LayoutOne;
