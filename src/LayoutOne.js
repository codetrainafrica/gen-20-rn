import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import Header from "./components/layoutOne/Header";

const LayoutOne = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16, flex: 90 }}>
        <Header />
        <View style={{ flex: 20, justifyContent: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Good Morning,
          </Text>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Rocky</Text>
        </View>

        <View
          style={{
            flex: 35,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "rgb(0,107,122)",
              borderRadius: 30,
            }}
          ></View>
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 30,
            }}
          ></View>
        </View>

        <View
          style={{
            flex: 20,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 16,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 30,
            }}
          ></View>
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 30,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          flex: 10,
          padding: 8,
          borderWidth: 2,
          borderColor: "#eee",
          borderRadius: 20,
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "#eee",
            borderRadius: 30,
          }}
        >
          <AntDesign name="home" size={24} color="black" />
          <Text style={{ marginHorizontal: 4 }}>Home</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <AntDesign name="calendar" size={24} color="black" />
          <FontAwesome name="sticky-note-o" size={24} color="black" />
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LayoutOne;
