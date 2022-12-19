import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { s } from '../../styles/Global'
import { useEffect } from 'react'

const FilterCard = ({screenName ,id,title, closeSheet, sortOrder, setSortOrder, activeCat, setActiveCat, isTime, isSort, isCat}) => {

  const handlePress = (title)=>{
    if(screenName=="Home"){
      return
    }
    if(title=="low to high"){
      setSortOrder("ASC")
    }
    if(title=="high to low"){
      setSortOrder("DESC")
    }
    if(isCat){
      setActiveCat(id)
    } 
    closeSheet()
  }

  return (
    <TouchableOpacity onPress={()=>handlePress(title)}>
      <View style={(isCat && activeCat==id) ||(isSort && sortOrder==id)?[styles.container, {borderColor: 'orange', borderWidth: 1}]:[styles.container]}>
        <Text style={[s.cgray]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 20,
    backgroundColor: '#d9dfe6',
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    // marginHorizontal: 5
  }
})

export default FilterCard