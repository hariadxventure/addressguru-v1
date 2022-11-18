import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { s } from '../styles/Global'

const Ad1 = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={[{marginBottom:5}]}>
            <Text style={[s.cWh, s.f22]}>
              <Text style={[s.f28]}>G</Text>row 
              <Text style={[s.f28]}>Y</Text>our</Text>
            <Text style={[s.cWh, s.f28, s.fwb, {lineHeight: 27}]}>Business</Text>
        </View>
        <View style={[{backgroundColor:"white", alignItems: 'center', justifyContent: 'flex-start', paddingRight:10}, s.row,s.br20]}>
            <View style={[s.container, s.bgColOr, s.br20,{width:25, height: 25 }]}>
                <Text style={[s.f22, {lineHeight:25}]}>+</Text>
            </View>
            <View style={[]}>
                <Text style={[s.f18,{paddingLeft:5}, s.f15]}>Post Free Ad</Text>
            </View>
        </View>
      </View>
      <View>
        <Image/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: "95%",
        height: 150,
        alignItems: 'flex-start',
        backgroundColor: '#1751D4',
        borderRadius: 30,
        padding: 20
    }
})

export default Ad1