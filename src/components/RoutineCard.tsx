import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RoutineCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 24,
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 10,
  },
});

export default RoutineCard;
