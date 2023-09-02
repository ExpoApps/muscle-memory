import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ExerciseCard = ({ title, isFirst, isLast }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push("exercises/" + title);
  };
  const itemStyle = [isFirst && styles.firstItem, isLast && styles.lastItem];
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, ...itemStyle]}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "700" }}>
              {title.toUpperCase()}
            </Text>
            <Text style={{ color: "white" }}>- dumbbell</Text>
          </View>
          <Text style={{ color: "white" }}>Back</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    padding: 24,
    backgroundColor: "#151718",
    borderRadius: 4,
    flexDirection: "row",
  },
  firstItem: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lastItem: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default ExerciseCard;
