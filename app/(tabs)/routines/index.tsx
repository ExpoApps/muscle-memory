import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Link href="/list/1">News 1</Link>
      <Link href="/list/2">News Two</Link>
      <Link href="/list/3">News Three</Link>
    </View>
  );
};

export default ListPage;
