import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import calcTime from "../methods/calcTime";
import apiData from "../methods/getApi";

const CardProduct = (props) => {
  const {id, images, title, amount, city, state, created_at, route, navigation }= props
  const [prodData, setProdData] = useState({})
  const [loading, setLoading] = useState()
  const time_diff = calcTime(created_at)

  const getProductDetails = ()=>{
    async function getData(){
      setLoading(true)
      const {data} = await apiData(`https://www.addressguru.in/api/marketplace/product?id=${id}`)
      setLoading(false)
      setProdData(data)
    }
    getData()
  }
  useEffect(()=>{
    getProductDetails()
    // console.log("prodData = ",prodData)
  },[])

  const handlePress=()=>{
    navigation.navigate('LandingPageMp',{
      prodId: prodData.id,
      title: prodData.title,
      state: prodData.state,
      city: prodData.city,
      locality: prodData.locality,
      img: images[0],
      postedDate: prodData.date_posted,
      amount: prodData.amount,
      name: prodData.name,
      email: prodData.email,
      phone: prodData.phone,
      cat: prodData.category_id,
      subCat: prodData.subcategory_id,
      about: prodData.description,
      adId: prodData.user_id,
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
    // borderColor: "#C1E0FF",
    elevation: 0,
    // paddingHorizontal: 1,
    borderRadius: 5,
    // borderWidth: 1,
    backgroundColor: 'white',
    width: '48%',
    marginVertical: 6
  },
  imgWrapper:{
    height: 140,
    width: "100%",
    // backgroundColor: "blue"
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
