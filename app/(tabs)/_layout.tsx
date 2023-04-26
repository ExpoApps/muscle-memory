import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="routines"
        options={{
          headerShown: false,
          tabBarLabel: "Routines",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          headerShown: false,
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
