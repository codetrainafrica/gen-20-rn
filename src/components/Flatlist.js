import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Flatlist = () => {
  const numbers = new Array(1000).fill({ name: "Kofi", age: 18 });

  return (
    <View style={styles.container}>
      <FlatList
        // horizontal
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={numbers}
        keyExtractor={(item, index) => {
          return index;
        }}
        renderItem={({ item: { age, name } }) => (
          <View>
            <Text>{age + " " + name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Flatlist;
