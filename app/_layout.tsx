import React from "react";
import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const StackLayout = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#10101E",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Feather name="info" size={24} color="black"></Feather>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default StackLayout;
