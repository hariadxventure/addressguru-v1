import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import calcTime from "../methods/calcTime";
import apiData from "../methods/getApi";

const CardProduct = (props) => {
  const {id, images, title, amount, city, state, created_at, route, navigation, isFeatured }= props
  const time_diff = calcTime(created_at)

  const handlePress=()=>{
    navigation.navigate('LandingPageMp',{
      id: id,
    })
  }
  return (
    <View style={isFeatured?[styles.container,styles.brbtm ,{...props?.style}]:[styles.container ,{...props?.style}]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.imgWrapper]}>
          <Image  style={styles.img} source={{uri:"https://www.addressguru.in/images/"+images[0]}}/>
        </View>
        {isFeatured?(
            <View style={[{position: 'absolute', right: 0, backgroundColor: 'orange', paddingHorizontal: 3 }]}>
            <Text style={[s.cWh, s.f12]}>Featured</Text>
          </View>
          ):(null)}
        <View style={[styles.content, s.pd5]}>
          <Text style={[s.pd5, {height: 60}]}>{title}</Text>
          <Text style={[s.pdh5, {fontWeight:"700"}]}>{amount?"₹ "+amount:"Contact for price"}</Text>
          <View style={[s.row, s.sb]}>
            <Text style={[ s.pd5,s.f12]}>{city}</Text>
            <Text style={[ s.pd5,s.f12]}>{time_diff}</Text>
          </View>
        </View>
       </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    borderRadius: 5,
    backgroundColor: 'white',
    width: '48%',
    minWidth: 158,
    borderColor: '#F3F3F3',
    borderWidth: 1,
    marginVertical: 6,
  },
  brbtm:{
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
  },
  imgWrapper:{
    height: 140,
    width: "100%",
  },
  img:{
    height: 140,
    width: "100%",
    borderTopRightRadius:5, 
    borderTopLeftRadius:5, 
    resizeMode: 'contain'
  },
  content:{

  }
});

export default CardProduct;
