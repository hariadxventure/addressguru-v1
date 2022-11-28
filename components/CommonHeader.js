import { View, Text, StyleSheet, Animated, Button, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import SearchBar from './SearchBar'
import Icon  from 'react-native-vector-icons/FontAwesome'
import { s } from '../styles/Global'
import ScrollMenu from './ScrollMenu'
import { TouchableOpacity } from 'react-native-gesture-handler'
import RBSheet from 'react-native-raw-bottom-sheet'
import FilterScreen from '../screens/special/FilterScreen'
const {width, height} = Dimensions.get('window')

const CommonHeader = ({scrollY, menuUrl}) => {
  const refRBSheet = useRef()
  return (
    <View style={[styles.container]}>
      <View style={[s.row]}>
        <SearchBar/>
        <TouchableOpacity style={[s.container, s.row, {flex: 1.3, paddingHorizontal: 5}]} onPress={()=>refRBSheet.current.open()}>
          <View style={[s.container, s.row, s.pd10]} >
            <Icon name='filter' size={17} color='black' style={[]}/>
            <Text style={[{fontSize: 18, marginLeft:3}]}>Filter</Text>
          </View>
        </TouchableOpacity>
      </View >
      {/* <View style={[s.pd5,s.pdt5]}>
        <ScrollMenu url={menuUrl}/>
      </View> */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={4.5*height/5}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.3)",
          },
          container: {
            // backgroundColor: "red"
          },
          draggableIcon: {
            backgroundColor: 'gray'
          }
        }}
      >
        <FilterScreen
          menuUrl = {menuUrl}
          closeSheet = {()=>{
            refRBSheet.current.close()
          }}
        />
      </RBSheet>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
    height: 60,
    elevation: 7
  }
})

export default CommonHeader