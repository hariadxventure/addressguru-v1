import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SingleScrollMenu = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container]}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 20,
    backgroundColor: '#d9dfe6',
    padding: 5,
    paddingHorizontal: 12,
    marginHorizontal: 6
  }
})

export default SingleScrollMenu