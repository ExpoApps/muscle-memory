import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="routines"
        options={{
          tabBarLabel: "Routines",
          headerTitle: "Routines",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          tabBarLabel: "Exercises",
          headerTitle: "Exercises",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
