import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const FlexIcon = () => {
  const router = useRouter();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontWeight: "bold" }}>EXERCISES</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("modal");
        }}
      >
        <Feather name="info" size={24} color="black"></Feather>
      </TouchableOpacity>
    </View>
  );
};

export default FlexIcon;
