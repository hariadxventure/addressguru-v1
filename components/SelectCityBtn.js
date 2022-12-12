import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import ModalCities from "./ModalCities";
import { s } from "../styles/Global";
import Icon from "react-native-vector-icons/FontAwesome";

const SelectCityBtn = ({city, handlePress}) => {

  return (
    <>
      <TouchableOpacity onPress={() => handlePress()}>
        <View style={[s.pd5 ,s.row, ,s.alICenter, {width: 120}]}>
          <Text style={[s.f15, { color: "#2DCDFF" }]}>{city==""?"Select City": (city.length>11?(city.substring(0,10)+".."):(city))}</Text>
          <Icon name="angle-down" color="#2DCDFF" style={[ {marginTop: 3, marginLeft: 3}]}/>
        </View>
      </TouchableOpacity>
      {/* <ModalCities modalVisible={modalVisible} setModalVisible={setModalVisible} setCity={setCity}/> */}
    </>
  );
};

export default SelectCityBtn;
