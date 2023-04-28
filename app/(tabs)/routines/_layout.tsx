import { Stack } from "expo-router";
import IconLink from "components/IconLink";

const RoutineLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "ROUTINES",
          headerShadowVisible: false,
          headerRight: () => <IconLink route="modal" icon="info" />,
        }}
      />
    </Stack>
  );
};

export default RoutineLayout;
