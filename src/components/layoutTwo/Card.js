import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({
  icon,
  title,
  value,
  trend,
  cardName,
  subtitle,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              borderWidth: 5,
              borderColor: "#fff5d5",
            }}
          >
            {icon}
          </View>
          <View style={{ marginHorizontal: 16 }}>
            <Text style={{ paddingVertical: 4, color: "#777" }}>{title}</Text>
            <Text
              style={{ paddingVertical: 4, fontSize: 20, fontWeight: "400" }}
            >
              {value}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", padding: 16 }}>
          {trend}
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 16 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Text style={{ fontSize: 20 }}>{cardName}</Text>
          <Text style={{ fontSize: 16, color: "#777" }}>{subtitle}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: imageSource }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Card;
