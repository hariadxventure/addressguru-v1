import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const LoadingLarge = () => {
  return (
    <View
      style={[s.container, { flex: 1, height: "100%", alignItems: "center" }]}
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default LoadingLarge;
