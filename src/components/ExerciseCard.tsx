import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ExerciseCard = ({ title }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push("exercises/" + title);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
    </TouchableOpacity>
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

export default ExerciseCard;
