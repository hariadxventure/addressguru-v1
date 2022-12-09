import {
  View,
  Text,
  Modal,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { s } from "../styles/Global";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomSearchBar from "./CustomSearchBar";
import apiData from "../methods/getApi";
import { useEffect } from "react";
const { width, height } = Dimensions.get("window");

const Single = ({ city, selected, setSelected, val }) => {
  return (
    <TouchableOpacity onPress={() => setSelected(val)}>
      <View style={[s.row, s.alICenter, styles.city]}>
        <Text style={[s.f22, s.cgray,{minWidth: "80%", paddingTop: 5}]}>{city}</Text>
        {selected == val ? <Icon name="check" color={"green"} size={20} /> : null}
      </View>
    </TouchableOpacity>
  );
};

const ModalCities = ({ modalVisible, setModalVisible }) => {
  const [selected, setSelected] = useState(-1);
  const [refreshing, setRefreshing] = useState(false);
  const [citiesData, setCitiesData] = useState([]);
  const getCitiesData = () => {
    async function getData() {
      setRefreshing(true);
      const { data } = await apiData("https://www.addressguru.in/api/cities");
      setRefreshing(false);
      setCitiesData(data);
    }
    getData();
  };
  useEffect(() => {
    getCitiesData();
  }, []);
  return (
    
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
      >
        <View style={[styles.centeredView]}>
          <View style={[styles.modalView]}>
            <View style={[styles.header]}>
              <View style={[s.row, s.alICenter,styles.top]}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View style={[styles.BackBtn]}>
                    <Icon name="long-arrow-left" size={35} color="gray" />
                  </View>
                </TouchableOpacity>
                <Text style={[s.f20, { width: "60%" }]}>Location</Text>
              </View>
              <View style={[{ height: 53 }]}>
                <CustomSearchBar style={{}} />
              </View>
            </View>
            <FlatList
              data={citiesData}
              renderItem={({ item, index }) => <Single city={item} />}
              onRefresh={() => getCitiesData()}
              refreshing={refreshing}
            />
          </View>
        </View>
      </Modal>

  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    backgroundColor: "white",
    width: width,
    height: height,
  },
  top: {
    justifyContent: "space-between",
    paddingTop: 2,
    paddingHorizontal: 10,
    // backgroundColor: 'green'
  },
  header:{
    elevation: 5,
  },
  BackBtn: {
    // backgroundColor: 'yellow'
  },
  city: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15
  },
});

export default ModalCities;
