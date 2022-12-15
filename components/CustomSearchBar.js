import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const CustomSearchBar = ({placeholder, handleSearch}) => {
  const [searchVal, setSearchVal] = useState("")
  const handleSearchNew = (searchVal)=>{
    handleSearch(searchVal)
  }
  return (
    <View style={[styles.container]}>
      <TextInput
        value={searchVal}
        placeholder= {placeholder}
        onChangeText={setSearchVal}
        // onSubmitEditing={()=>handleSearchNew(searchVal)}
        onSubmitEditing={()=>handleSearch(searchVal)}
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        elevation: 1,
        // backgroundColor: '#d9dfe6'
        backgroundColor: 'white'
    },
    searchIcon:{
      position: 'absolute',
      top: '40%',
      left: 25,
      elevation: 2
    }
})

export default CustomSearchBar