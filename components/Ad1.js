import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { s } from '../styles/Global'

const Ad1 = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
            <Text style={[s.cWh, s.f28]}>Grow Your</Text>
            <Text style={[s.cWh, s.f28]}>Business</Text>
        </View>
        <View>
            <View>
                <Text>+</Text>
            </View>
            <View>
                <Text>Post Free Ad</Text>
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
        backgroundColor: 'blue',
        borderRadius: 30,
        padding: 20
    }
})

export default Ad1