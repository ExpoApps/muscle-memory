import SafeScreen from "components/SafeScreen";
import React from "react";
import { Link, useRouter } from "expo-router";
import FlexIcon from "components/FlexIcon";

const ExercisePage = () => {
  return (
    <SafeScreen>
      <FlexIcon />
      <Link href="/list/1">Exercise One</Link>
      <Link href="/list/2">Exercise Two</Link>
      <Link href="/list/3">Exercise Three</Link>
    </SafeScreen>
  );
};

export default ExercisePage;
