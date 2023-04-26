import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import RoutineCard from "components/RoutineCard";

const RoutinePage = () => {
  return (
    <View style={{ flex: 1, margin: 8 }}>
      <RoutineCard title="Core" />
      <Link href="/routines/1">Routine One</Link>
      <Link href="/routines/2">Routine Two</Link>
      <Link href="/routines/3">Routine Three</Link>
    </View>
  );
};

export default RoutinePage;
