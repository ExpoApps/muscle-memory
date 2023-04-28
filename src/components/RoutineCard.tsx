import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RoutineCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 24,
    backgroundColor: "#151718",
    borderRadius: 10,
  },
});

export default RoutineCard;
