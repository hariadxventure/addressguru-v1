import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomSearchBar = () => {
  const [searchVal, setSearchVal] = useState("")
  return (
    <View style={[styles.container]}>
      <TextInput
        value={searchVal}
        placeholder='Search for products'
        onChangeText={setSearchVal}
        onSubmitEditing={()=>console.log("first")}
        style={[styles.search]}
      />
      <Icon name='search' color="black" size={18} style={[styles.searchIcon]}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex: 4,
      paddingVertical: 5,
      paddingHorizontal: 10
    },
    search: {
        padding: 7,
        paddingLeft: 40,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: '#d9dfe6'
    },
    searchIcon:{
      position: 'absolute',
      top: '40%',
      left: 25
    }
})

export default CustomSearchBar