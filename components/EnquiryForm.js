import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../styles/Global'

const EnquiryForm = () => {
  return (
    <View style={[s.bgColWh, {paddingHorizontal:10, paddingVertical: 15, marginVertical:10, borderRadius: 5}]}>
      <View style={{borderBottomWidth: 1, borderColor: 'gray',paddingVertical: 20, paddingHorizontal: 5}}>
        <Text style={[s.f20, s.cgray]}>Send Enquiry</Text>
      </View>
      <View style={[{paddingVertical:10, paddingTop: 20}]}>
        <TextInput style={[styles.input]} placeholder='Full Name'/>
        <TextInput style={[styles.input]} placeholder='Email'/>
        <TextInput style={[styles.input]} placeholder='Mobile Number'/>
        <TextInput style={[styles.input,{height:70, marginBottom: 0}]} placeholder='Type your message...'/>
        <View style={[ {alignItems: 'center', paddingTop: 20}]}>
          <TouchableOpacity>
            <View style={[s.container, s.pd10, {backgroundColor: 'red', width: 150, borderRadius: 10 }]}>
            <Text style={[s.f20, s.fwb,{color: 'white'}]}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  input: {
    marginBottom: 20,
    padding: 5,
    height: 50,
    paddingHorizontal: 15,
    borderWidth:1,
    borderColor: 'gray',
    borderRadius: 10
  }
})

export default EnquiryForm