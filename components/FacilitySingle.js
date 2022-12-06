import { View, Text } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import React from 'react'
import { s } from '../styles/Global';

const FacilitySingle = ({text}) => {
  return (
    <View style={[s.row, s.alICenter,{width: '46%', margin: 3, }]}>
      <Icon name='check' color={"green"} size={17}/>
      <Text style={[s.wrp, s.wrp,s.fwb, {width: '89%', paddingLeft: 3}]}>{text}</Text>
    </View>
  )
}

export default FacilitySingle