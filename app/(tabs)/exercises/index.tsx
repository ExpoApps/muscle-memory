import React from "react";
import { View, FlatList } from "react-native";
import ExerciseCard from "components/ExerciseCard";

const ExercisePage = () => {
  const exerciseList = [
    { id: "squat", title: "squat" },
    { id: "benchpress", title: "benchpress" },
    { id: "pullup", title: "pullup" },
    { id: "row", title: "row" },
    { id: "deadlift", title: "deadlift" },
    { id: "shoulderpress", title: "shoulderpress" },
    { id: "dips", title: "dips" },
    { id: "dumbbell-side-lateral-raise", title: "dumbbell side lateral raise" },
  ];

  const sortedArray = exerciseList.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <View style={{ flex: 1, margin: 8 }}>
      <FlatList
        data={sortedArray}
        renderItem={({ item, index }) => (
          <ExerciseCard
            title={item.title}
            isFirst={index === 0}
            isLast={index === sortedArray.length - 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExercisePage;
