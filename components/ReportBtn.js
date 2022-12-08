import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../styles/Global'
import { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import ModalReport from './ModalReport'

const ReportBtn = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableOpacity onPress={()=>setModalVisible(true)}>
    <View style={[s.row]}>
      <Icon name="times-rectangle" size={20} color="red" />
      <Text style={[s.pdh5, { color: "red" }]}>Report</Text>
    </View>
  </TouchableOpacity>
  <ModalReport modalVisible={modalVisible} setModalVisible={setModalVisible} {...props}/>
    </>
  )
}

export default ReportBtn