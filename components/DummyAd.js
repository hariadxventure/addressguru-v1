import { View, Text, Image } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const DummyAd = () => {
  return (
    <View style={[s.container, s.pd10, {}]}>
      <Image
        style={{ width: "100%", resizeMode: "contain" }}
        source={require("../assets/others/AdMarketPlace.jpg")}
      />
    </View>
  );
};

export default DummyAd;
