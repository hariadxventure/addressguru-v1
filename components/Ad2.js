import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Ad2 = () => {
  return (
    <View style={styles.ad2}>
      <Text>Ad2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    ad2:{
        width: '80%',
        height: 250,
        backgroundColor: 'gray'
    }
})

export default Ad2