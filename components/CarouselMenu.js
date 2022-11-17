import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { carouselData } from "../data/carouselData";
import Carousel, { Pagination } from "react-native-snap-carousel";
import apiData from "../methods/getApi";
const { width, height } = Dimensions.get("window");

let cWidth = width - 20
const CarouselMenu = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [entries, setEntries] = useState(carouselData);
  useEffect(()=>{
    async function getData() {
      const {data} = await apiData("https://www.addressguru.in/api/categories") 
      let arr = []
      while (data.length) {
        arr.push(data.splice(0,20))
      }
      setEntries(arr)
      // console.log("dataApi= ",arr)
    }
    getData()
  },[])
  const CarouselItem = ({el})=>{
    return(
      <TouchableOpacity>
        <View  style={styles.singleItem}>
         <Icon 
          // name={el.icon.replace('fa-solid fa-microphone','microphone')}
          // color={el.colors.replace('#0000', '#000000')} 
          name={el.icon}
          color={el.colors} 
          size={32} 
          />
         <Text style={{ textAlign: "center", fontSize:12 }}>{el.name}</Text>
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
        onSnapToItem={index => setActiveSlide(index)}
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
           alignItems: 'flex-start'
          }}
        sliderWidth= {cWidth}
        pagingEnabled={true}
        itemHeight={height}
        itemWidth={cWidth}
      />
      <Pagination
       dotsLength={entries.length}
       containerStyle={{backgroundColor: 'white', marginTop: -10}}
       dotStyle={{
        width: 13,
        height: 4,
        // borderRadius: 5,
        marginHorizontal: -3,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
       }}
       activeDotIndex={activeSlide}
       inactiveDotScale={0.7}
       inactiveDotOpacity={0.4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleItem: {
    width: (cWidth)/4.3,
    margin: 2,
    marginBottom: 6,
    marginTop: 10,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 72,
    // borderWidth: 1,
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
