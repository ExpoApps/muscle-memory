import React from "react";
import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

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
          headerLeft: () => (
            <Button
              title="Close"
              onPress={() => {
                router.back();
              }}
            />
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
