import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { s } from '../styles/Global'

const Ad2 = () => {
  return (
    <View style={[styles.ad2, s.container]}>
      <Text style={{fontSize:30, color: "white"}}>Ad2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ad2:{
        width: '85%',
        height: 220,
        backgroundColor: 'gray'
    }
})

export default Ad2