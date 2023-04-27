import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import RoutineCard from "components/RoutineCard";
import { useRouter } from "expo-router";

const RoutinePage = () => {
  const routineList = [
    {
      id: "Core",
      title: "Core",
      exercises: [
        "squat",
        "benchpress",
        "pullup",
        "row",
        "deadlift",
        "shoulderpress",
      ],
    },
  ];

  const Routine = ({ routine }) => {
    const router = useRouter();
    const { title, exercises } = routine;
    const list: string = JSON.stringify(exercises);
    const handlePress = () => {
      router.push({
        pathname: "routines/" + routine.title,
        params: { title, exercises: list },
      });
    };
    return (
      <>
        <TouchableOpacity onPress={handlePress}>
          <RoutineCard title={routine.title} />
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={{ flex: 1, margin: 8 }}>
      <FlatList
        data={routineList}
        renderItem={({ item }) => <Routine routine={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RoutinePage;
