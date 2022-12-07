import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { s } from "../styles/Global";

const Single = ({ text, icon, data }) => {
  return (
    <TouchableOpacity onPress={icon=='phone'?(()=>Linking.openURL(`tel: ${data}`)):icon=='chat'?(()=>Linking.openURL(`sms:${data}`)):(()=>Linking.openURL(data)) }>
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

const CtaBtns = ({data, webLink}) => {
  return (
    <View style={[s.row, s.pdh10]}>
      <Single text="call" icon="phone" data={data?.ph_number}/>
      <Single text="chat" icon="whatsapp" data={data?.ph_number}/>
      <Single text="Visit Website" icon="internet-explorer" data={webLink}/>
    </View>
  );
};

export default CtaBtns;
