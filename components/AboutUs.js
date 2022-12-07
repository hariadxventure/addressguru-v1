import { View, Text } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const AboutUs = ({data}) => {
  return (
    <>
      <View
        style={[
          {
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            paddingVertical: 10,
          },
        ]}
      >
        <Text style={[s.f18]}>About us</Text>
      </View>
      <View style={[s.pdv5]}>
        <Text style={[s.f17, { lineHeight: 25 }]}>
          {data}
        </Text>
      </View>
      <View></View>
    </>
  );
};

export default AboutUs;
