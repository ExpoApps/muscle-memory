import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconLink = ({ route, icon }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(route);
      }}
    >
      <Feather name={icon} size={24} color="white"></Feather>
    </TouchableOpacity>
  );
};

export default IconLink;
