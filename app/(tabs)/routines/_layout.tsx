import { Stack } from "expo-router";

const RoutineLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RoutineLayout;
