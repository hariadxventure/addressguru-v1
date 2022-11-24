import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const CardProduct = (props) => {
  const {images, title, amount, city, created_at,id }= props
  // const imgSrc = `https://www.addressguru.in/api/marketplace/product?id:${id}`
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.imgWrapper]}>
          <Image  style={styles.img} source={{uri:"https://www.addressguru.in/images/"+images[0]}}/>
        </View>
        <View style={[styles.content, s.pd5]}>
          <Text style={[s.pd5, {height: 60}]}>{title}</Text>
          <Text style={[s.pdh5, {fontWeight:"700"}]}>{amount?"₹ "+amount:"Contact for price"}</Text>
          <View style={[s.row, s.sb]}>
            <Text style={[ s.pd5]}>{city}</Text>
            {/* <Text style={[ s.pd5]}>{created_at}</Text> */}
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
    width: '45%',
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
