import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const RoutineCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text style={{ color: "white", fontWeight: "700" }}>
          {title.toUpperCase()}
        </Text>
        <Text style={{ color: "white" }}>6 exercises</Text>
      </View>
      <FontAwesome5 name="chevron-circle-right" size={24} color="#bdf147" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 24,
    backgroundColor: "#151718",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RoutineCard;
