import React from "react";
import { View, FlatList } from "react-native";
import RoutineCard from "components/RoutineCard";

const RoutinePage = () => {
  const routineList = [{ id: "Core", title: "Core" }];

  return (
    <View style={{ flex: 1, margin: 8 }}>
      <FlatList
        data={routineList}
        renderItem={({ item }) => <RoutineCard title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RoutinePage;
