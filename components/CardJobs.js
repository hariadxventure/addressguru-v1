import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardJobs = ({title,company_name}) => {
  return (
    <View style={[styles.container]}>
      <Text style={{fontSize: 20}}>{title}</Text>
      <Text style={{fontSize: 14,backgroundColor:'red'}}>{company_name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 150,
    backgroundColor: "gray",
    marginVertical: 10
  }
})

export default CardJobs