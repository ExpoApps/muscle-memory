import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";

const ExercisePage = () => {
  return (
    <View style={{ flex: 1, margin: 8 }}>
      <Link href="/list/1">Exercise One</Link>
      <Link href="/list/2">Exercise Two</Link>
      <Link href="/list/3">Exercise Three</Link>
    </View>
  );
};

export default ExercisePage;
