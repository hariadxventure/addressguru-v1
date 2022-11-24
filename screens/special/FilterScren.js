import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { s } from '../../styles/Global'

const FilterScren = () => {
  return (
    <View style={[styles.container]}>
      <View style={[s.sb]}>
        <View>FilterScren</View>
        <View>X</View>
      </View>
      <View>
        <Text style={[s.f28]}>FilterScren</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    position: 'absolute'

  }
})

export default FilterScren