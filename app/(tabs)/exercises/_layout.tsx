import { Stack } from "expo-router";
import IconLink from "components/IconLink";

const ExerciseLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "EXERCISES",
          headerShadowVisible: false,
          headerRight: () => <IconLink route="modal" icon="info" />,
        }}
      />
    </Stack>
  );
};

export default ExerciseLayout;
