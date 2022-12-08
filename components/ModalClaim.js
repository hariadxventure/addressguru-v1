import { View, Text, Modal, Button, TextInput, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "../styles/Global";
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window')

const Single = ({ label, placeHolder, multiline,nol }) => {
  return (
    <View style={[s.mv5]}>
      <Text style={[s.fwb, s.cgray]}>{label}<Text style={[{color: 'red'}]}> *</Text></Text>
      <TextInput style={[styles.input]} multiline={multiline} numberOfLines={nol} placeholder={placeHolder} textAlignVertical={'top'} />
    </View>
  );
};
const CustomBtn=({handleSubmit})=>{
  return(
    <TouchableOpacity onPress={()=>handleSubmit()}>
      <View style={[styles.submitBtn]}>
        <Text style={[s.f20,{color: 'white'}]}>Claim</Text>
      </View>
    </TouchableOpacity>
  )
}
const ModalClaim = (props) => {
  const { title, modalVisible, setModalVisible, listingId, userId } = props;
  const [selected, setSelected] = useState(0);
  const handleSubmit = () => {
    setModalVisible(false);
  };
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
          <View style={[s.row, s.alICenter, s.sb, s.pdb10]}>
            <Text style={[s.fwb, s.cgray, s.f15]}>
              Claim:{" "}
              {title?.length > 30 ? title?.substring(0, 30) + "..." : title}
            </Text>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <View style={[styles.closeBtn]}>
                    <Icon name='times' size={20} color="gray"/>
                </View>
              </TouchableOpacity>
          </View>
          <Single label="Full Name" placeHolder="Full Name" multiline={false} nol={1}/>
          <Single
            label="Email"
            placeHolder="example@email.com"
            multiline={false}
            nol={1}
          />
          <Single
            label="Mobile Number"
            placeHolder="Mobile Number"
            multiline={false}
            nol={1}
          />
          <Single
            label="Reason for ownership claim"
            placeHolder="Type here..."
            multiline={true}
            nol={4}
          />
          <View style={[s.container]}>
            <CustomBtn handleSubmit={handleSubmit}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    // backgroundColor: 'yellow',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: width-20,
    elevation: 4,
    paddingVertical:20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  closeBtn: {
    padding: 5,
    paddingHorizontal: 10,
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    padding:5,
    borderRadius: 5,
    marginVertical: 2
  },
  submitBtn:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    marginHorizontal: 'auto',
    width: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }

});

export default ModalClaim;
