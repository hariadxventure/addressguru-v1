import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CardPostAdCategory from '../../components/CardPostAdCategory'
import { postAdHomeData } from '../../data/postAdHomeData'
import { ScrollView } from 'react-native-gesture-handler'
import { s } from '../../styles/Global'
const PostAd = () => {
  return (
    <ScrollView>
      <View style={[s.pd5,{paddingTop:7}]}>
        <View style={[styles.container]}>
          <CardPostAdCategory {...postAdHomeData[0]}/>
          <CardPostAdCategory {...postAdHomeData[1]}/>
        </View>
        <View style={[styles.container]}>
          <CardPostAdCategory {...postAdHomeData[2]}/>
        </View>
        <View style={[styles.container]}>
          <CardPostAdCategory {...postAdHomeData[3]}/>
          <CardPostAdCategory {...postAdHomeData[4]}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default PostAd