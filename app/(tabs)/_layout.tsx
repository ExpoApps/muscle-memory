import { Tabs, useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default () => {
  const router = useRouter();
  const modalOptions = {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          router.push("modal");
        }}
      >
        <Feather name="info" size={24} color="black"></Feather>
      </TouchableOpacity>
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
