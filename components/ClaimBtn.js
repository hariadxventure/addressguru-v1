import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { s } from "../styles/Global";
import { useState } from "react";
import ModalClaim from "./ModalClaim";

const ClaimBtn = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableOpacity onPress={()=>setModalVisible(true)}>
      <View
        style={[s.row, s.alICenter, s.pd10, { justifyContent: "flex-end" }]}
        >
        <Icon name="hand-o-right" color={"blue"} size={15} />
        <Text style={[{ paddingLeft: 5 }]}>Claim This Business</Text>
      </View>
    </TouchableOpacity>
    <ModalClaim  modalVisible={modalVisible} setModalVisible={setModalVisible} {...props}/>
    </>
  );
};

export default ClaimBtn;
