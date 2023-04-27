import { View, Text } from "react-native";
import React from "react";
import { Stack, useSearchParams } from "expo-router";

const NewsDetailsPage = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Exercise ${id}` }} />
      <Text>My Exercise: {id}</Text>
    </View>
  );
};

export default NewsDetailsPage;
