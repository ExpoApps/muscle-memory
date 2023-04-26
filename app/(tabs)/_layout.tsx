import { Tabs, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button } from "react-native";

export default () => {
  const router = useRouter();
  const modalOptions = {
    headerRight: () => (
      <Button
        title="Open"
        onPress={() => {
          router.push("modal");
        }}
      />
    ),
  };
  return (
    <Tabs>
      <Tabs.Screen
        name="routines"
        options={{
          tabBarLabel: "Routines",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
          ...modalOptions,
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
          ...modalOptions,
        }}
      />
    </Tabs>
  );
};
