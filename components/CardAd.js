import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const CardAd = ({imgSrc, style}) => {
  return (
    <TouchableOpacity>
      <View style={[s.container, ,s.pdt10, s.pdb10,{...style}]}>
        <Image
          style={{ width: "100%", resizeMode: "contain" }}
          source={imgSrc}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardAd;
