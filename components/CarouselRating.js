import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useState } from 'react';
import { s } from '../styles/Global';
import PrintStars from './PrintStars';
import calcTime from '../methods/calcTime';
import calcTime1 from '../methods/calcTime1';
const { width, height } = Dimensions.get("window");

const CarouselRating = ({entries}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index})=>{
    let time_diff = calcTime1(item.created_at)
    return(
      <View style={[s.pd10]}>
      <Text style={[s.fwb, s.cgray, s.pdb10]}>{item.name}</Text>
      <View style={[s.row, s.alICenter]}>
        <PrintStars fdigit={item.rating} ldigit={0}/>
        <Text style={[s.cgray, s.pdl5, s.mh3]}>{time_diff}</Text>
      </View>
      <Text>{item.message.length>120? item.message.substring(0,120)+"...":item.message}</Text>
    </View>
    )
  }

  return (
    <View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        onSnapToItem={index=>setActiveSlide(index)}
        containerCustomStyle={{
          // backgroundColor: 'red',
        }}
        contentContainerCustomStyle={{
          // backgroundColor: 'yellow',
        }}
        sliderWidth={width-10}
        paggingEnabled={true}
        itemWidth={width-10}
        itemHeight={220}
      />
      <Pagination
        dotsLength={entries?.length}
        containerStyle={{backgroundColor: 'white', marginTop: -10}}
        dotStyle={{
          width: 13,
          height: 4,
          marginHorizontal: -3,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
        activeDotIndex={activeSlide}
        inactiveDotScale={0.7}
        inactiveDotOpacity={0.4}
      />
    </View>
  )
}

export default CarouselRating