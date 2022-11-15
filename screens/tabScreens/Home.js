import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CarouselMenu from '../../components/CarouselMenu'

const Home = () => {
  return (
    <ScrollView>
      <View style={s.searchbar}>
        <Text>Seacrch bar</Text>
      </View>
      <View style={s.sec2}>
        <Text>Carousel menu</Text>
        <CarouselMenu/>
      </View>
      <View style={s.sec3}>
        <Text>MarketPlace 1</Text>
      </View>
      <View style={s.sec4}>
        <Text>Ad 1</Text>
      </View>
      <View style={s.sec5}>
        <Text>Ad 2</Text>
      </View>
      <View style={s.sec6}>
        <Text>MarketPlace 2</Text>
      </View>
      <View>
        <View style={s.sec4}>
        <Text>Ad 4</Text>

        </View>
      </View>
    </ScrollView>
  )
}
const s = StyleSheet.create({
  searchbar:{
    backgroundColor: "pink",
    height: 60
  },
  sec2:{
    // backgroundColor: 'orangered',
    // height: 
  },
  sec3:{
    backgroundColor: 'green',
    height: 500
  },
  sec4:{
    backgroundColor:'yellow',
    height: 200
  },
  sec5:{
    backgroundColor: 'blue',
    height: 400
  },
  sec6:{
    backgroundColor: 'gray',
    height: 500
  }
})

export default Home