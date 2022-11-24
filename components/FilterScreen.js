import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const FilterScreen = (props) => {
  return (
    <View style={[styles.container]}>
      <View style={[]}>
        <View>
          <Icon name='filter' size={15}/>
          <Text>Filters</Text>
        </View>
        <TouchableOpacity onPress={props.closeSheet}>
          <Text>
            <Icon name='times' size={22}/>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{}]}>
        <ScrollView>
          <Text>FilterScreen</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: 400,
    elevation: 100
  }
})

export default FilterScreen