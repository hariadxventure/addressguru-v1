import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import ModalCities from "./ModalCities";
import { s } from "../styles/Global";

const SelectCities = ({city, setCity}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={{ paddingRight: 20 }}>
          <Text style={[s.f15, { color: "#2DCDFF" }]}>{city}</Text>
        </View>
      </TouchableOpacity>
      <ModalCities modalVisible={modalVisible} setModalVisible={setModalVisible} setCity={setCity}/>
    </>
  );
};

export default SelectCities;
