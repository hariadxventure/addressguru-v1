import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../../styles/Global'

const FilterCard = ({title, handlePress}) => {

  return (
    <TouchableOpacity onPress={handlePress}>
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