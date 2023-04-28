import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.replace("routines");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: "white" }}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
