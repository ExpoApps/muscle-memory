import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack, useSearchParams } from "expo-router";
import ExerciseCard from "components/ExerciseCard";

const NewsDetailsPage = () => {
  const { id, title, exercises } = useSearchParams();
  let parsedExercises = typeof exercises === "string" && JSON.parse(exercises);

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Routine - ${id}` }} />
      <FlatList
        data={parsedExercises}
        renderItem={({ item }) => <ExerciseCard title={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default NewsDetailsPage;
