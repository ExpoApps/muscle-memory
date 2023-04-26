import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function SafeScreen(props) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, margin: 8 }}>{props.children}</SafeAreaView>
  );
}

export default SafeScreen;
