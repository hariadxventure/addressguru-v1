import { View, Text, Modal, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { s } from '../styles/Global'
import { useState } from 'react'

const Single = ({text, selected, setSelected, val})=>{
  return(
    <TouchableOpacity onPress={()=>setSelected(val)}>
      <View style={[s.row, s.mv5,s.alICenter,{justifyContent: 'flex-start'}]}>
        <View style={selected==val?([styles.disc]):([styles.circle])}></View>
        <Text style={[s.pdl5,s.cgray]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ModalReport = (props) => {
  const {title, modalVisible, setModalVisible, listingId, userId} = props
  const [selected, setSelected] = useState(0)
  const handleSubmit =()=>{
    setModalVisible(false)
  }

  return (
    <Modal
      animationType='fade'
      transparent={true}
      onRequestClose={()=>{
        setModalVisible(false)
      }}
      visible={modalVisible}
    >
      <View style={[styles.centeredView]}> 
        <View style={[styles.modalView]}>
          <View style={[s.row, s.alICenter, s.sb, s.pdb10]}>
            <Text style={[s.fwb, s.cgray]}>Report: {title?.length>20 ?(title?.substring(0,20)+"..."):(title)}</Text>
              <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <View style={[styles.closeBtn]}>
                    <Icon name='times' size={20} color="gray"/>
                </View>
              </TouchableOpacity>
          </View>
          <View>
            <Single val="1" selected={selected} setSelected={setSelected} text="Illegal/Fraudulet"/>
            <Single val="2" selected={selected} setSelected={setSelected} text="Spam Ad"/>
            <Single val="3" selected={selected} setSelected={setSelected} text="Duplicate Ad"/>
            <Single val="4" selected={selected} setSelected={setSelected} text="Ad is in the wrong category"/>
            <Single val="5" selected={selected} setSelected={setSelected} text="Against Posting Rules"/>
            <Single val="6" selected={selected} setSelected={setSelected} text="Adult Content"/>
            <Single val="7" selected={selected} setSelected={setSelected} text="Other"/>
            <TextInput style={[styles.input]} placeholder='Enter your email address'/>
            <Button title='Report' color={'red'} onPress={handleSubmit}/>
          </View>
        </View>
      </View>
     </Modal> 
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    // backgroundColor: 'yellow',
  },
  modalView:{
   backgroundColor: 'white',
   borderRadius: 20,
   width: 280,
   elevation: 4,
   padding:10,
   paddingHorizontal: 20,
   paddingBottom: 20
  },
  closeBtn:{
    padding: 5,
    paddingHorizontal: 10
  },
  circle:{
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  disc:{
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: 'black',
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    padding:5,
    borderRadius: 5,
    marginVertical: 10
  }
})

export default ModalReport