import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import calcTime from "../methods/calcTime";
import apiData from "../methods/getApi";

const CardProduct = (props) => {
  const {id, images, title, amount, city, state, created_at, route, navigation }= props
  const time_diff = calcTime(created_at)

  const handlePress=()=>{
    navigation.navigate('LandingPageMp',{
      id: id,
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.imgWrapper]}>
          <Image  style={styles.img} source={{uri:"https://www.addressguru.in/images/"+images[0]}}/>
        </View>
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
    marginVertical: 6
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
