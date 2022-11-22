import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { s } from '../styles/Global'
import ScrollMenu from './ScrollMenu'


const HeaderMarketPlace = ({scrollY}) => {
  return (
    <View style={[styles.container]}>
      <View style={[s.row]}>
        <SearchBar/>
        <View style={[s.container, s.row, {flex: 1.3, paddingRight: 10}]}>
          <Icon name='filter' size={17} color='black' style={[]}/>
          <Text style={[{fontSize: 18, marginLeft:3}]}>Filter</Text>
        </View>
      </View >
      <View style={[s.pd5,s.pdt5]}>
        <ScrollMenu/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
    height: 100,
    elevation: 7
  }
})

export default HeaderMarketPlace