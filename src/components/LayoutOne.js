import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const LayoutOne = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{ height: "100%", backgroundColor: "yellow", width: 100 }}
        ></View>
        <View
          style={{ height: "100%", backgroundColor: "red", width: 100 }}
        ></View>
      </View>

      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Good morning,</Text>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Rocky</Text>
      </View>

      <View style={{ height: "58%" }}>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "rgb(22, 106, 123)",
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            height: "30%",
            marginTop: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              height: "100%",
              width: "47%",
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          ></View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <AntDesign name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="calendar" size={24} color="black" />
          <FontAwesome5 name="itunes-note" size={24} color="black" />
          <AntDesign name="ellipsis1" size={24} color="black" />
        </View>
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
