import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { carouselData } from "../data/carouselData";
import Carousel from "react-native-snap-carousel";
import apiData from "../methods/getApi";
const { width, height } = Dimensions.get("window");

let cWidth = width - 20
const CarouselMenu = (props) => {
  const [entries, setEntries] = useState(carouselData);
  useEffect(()=>{
    async function getData() {
      const {data} = await apiData("https://www.addressguru.in/api/categories") 
      let arr = []
      while (data.length) {
        arr.push(data.splice(0,16))
      }
      console.log("dataApi= ",arr)
    }
    getData()
  },[])
  const CarouselItem = ({el})=>{
    return(
      <TouchableOpacity>
        <View  style={styles.singleItem}>
         <Icon name={el.icon} color={el.colors} size={35} />
         <Text style={{ textAlign: "center" }}>{el.name}</Text>
       </View>
      </TouchableOpacity>
    )
  }

  const renderItem = ({item, index})=>{
    return(
    <View style={styles.slide}>
      {item.map(el=>(
         <CarouselItem key={el.id} el={el}/>
      ))}
    </View>
    )
  }
  return (
    <View style={styles.slideContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
        <Text style={{fontSize: 18}}>
          Looking For
        </Text>
        <Text>
          <Text style={{color:'orange'}}>See all</Text>
          <Text >
            <Icon name="angle-right" size={20} color='orange' style={{ borderRadius: 50, padding: 5,marginLeft: 3, }}/>
          </Text>
        </Text>
      </View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        containerCustomStyle={{
          paddingTop: 5,
          backgroundColor: "white", 
          borderRadius: 30,
          
        }}
        contentContainerCustomStyle={{
          // backgroundColor: 'yellow',
          // borderRadius: 30,
          display: 'flex', 
          justifyContent: 'center',
           alignItems: 'center'}}
        sliderWidth= {cWidth}
        itemHeight={height}
        itemWidth={cWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    width: (cWidth)/4.3,
    margin: 2,
    marginBottom: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: 'black'
  },
  slideContainer:{
    width: cWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 10,
    paddingTop: 15,
    // paddingBottom: 15
  },
  slide:{
    // position: 'absolute',
    // top: 0,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor: "orange",
    width: cWidth,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default CarouselMenu;
