import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ShowRating from './ShowRating'
import { s } from '../styles/Global'
import CarouselRating from './CarouselRating'

const ShowReviews = ({data}) => {
  return (
    <View style={[s.bgColWh, s.br5, s.mv5]}>
      <View style={[s.row, s.sb, s.pdh10, s.bgColLightgry, s.pdv10]}>
        <ShowRating ratings={data}/>
        <TouchableOpacity>
          <Text style={[s.f12, s.cLightBlue]}>Write a review</Text>
        </TouchableOpacity>
      </View>
      <CarouselRating entries={data}/>
    </View>
  )
}

export default ShowReviews