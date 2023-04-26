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
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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

export default ExerciseCard;
