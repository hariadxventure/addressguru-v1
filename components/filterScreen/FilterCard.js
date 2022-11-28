import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { s } from '../../styles/Global'

const FilterCard = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container]}>
        <Text style={[s.cgray]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 20,
    backgroundColor: '#d9dfe6',
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    // marginHorizontal: 5
  }
})

export default FilterCard