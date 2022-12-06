import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import  Carousel, {Pagination} from 'react-native-snap-carousel'
import React from 'react'
import { useState } from 'react'
const { width, height } = Dimensions.get("window");


const CarouselSlider = ({entries, type}) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItem = ({item, index})=>{
    return(
      <View>
          <Image
              style={[styles.img]}
              source={{
                uri:
                  "https://www.addressguru.in/images/"+item.name,
              }}
          />
        </View>
    )
  }

  return (
    <>
    <Carousel 
      data={entries}
      renderItem={renderItem}
      onSnapToItem={index=>setActiveSlide(index)}
      containerCustomStyle={{
        // backgroundColor: "red",
        paddingTop: 5
      }}
      contentContainerCustomStyle={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
      sliderWidth= {width}
      pagingEnabled={true}
      itemHeight= {width}
      itemWidth= {320}
    />
    <Pagination
       dotsLength={entries?.length}
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
       </>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingVertical: 12,
    justifyContent: "center",
    // backgroundColor: 'green'
  },
  img: {
    height: 180,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
});

export default CarouselSlider