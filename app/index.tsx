import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const LoginPage = () => {
  const router = useRouter();
  const handlePress = () => {
    router.replace("routines");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/(tabs)/exercises"} asChild>
        <Pressable onPress={handlePress}>
          <Text>Start</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;
