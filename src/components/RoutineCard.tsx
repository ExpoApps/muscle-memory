import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const RoutineCard = ({ title }) => {
  return (
    <Link href={"/routines/" + title}>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#eaeaea",
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 10,
  },
});

export default RoutineCard;
