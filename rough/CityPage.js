import { View, Text } from 'react-native'
import React from 'react'
import { s } from '../../styles/Global'
import Icon from 'react-native-vector-icons/FontAwesome'

const Single =({city})=>{
  return(
    <View style={[s.pd5, {borderBottomColor: 'gray', borderBottomWidth: 1, height: 20}]}>
      <Text style={[]}>{city}</Text>
      <Icon name='check' color={'green'} size={20}/>
    </View>
  )
}
const CityPage = ({data}) => {
  return (
    <View>
      {data.map((el, idx)=>(<Single key={idx} city={el}/>))}
    </View>
  )
}

export default CityPage