import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { s } from "../styles/Global";

const Single = ({ text, icon }) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          s.row,
          s.pd10,
          s.br10,
          s.bgColLightRed,
          s.alICenter,
          s.mh3
        ]}
      >
        <Icon name={icon} size={20} color="red" />
        <Text style={[s.cgray, s.f18, { paddingLeft: 5 }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CtaBtns = () => {
  return (
    <View style={[s.row, s.pdh10]}>
      <Single text="call" icon="phone" />
      <Single text="chat" icon="whatsapp" />
      <Single text="Visit Website" icon="internet-explorer" />
    </View>
  );
};

export default CtaBtns;
