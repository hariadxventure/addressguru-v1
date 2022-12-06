import { View, Text } from 'react-native'
import React from 'react'
import SingleReview from './subComponents/SingleReview'
import ShowRating from './ShowRating'

const ShowReviews = ({data}) => {
  return (
    <View>
      <View >
        <ShowRating/>
        <Text>Write a review</Text>
      </View>
      {data && data.map((el,idx)=>(<SingleReview key={idx} data={el}/>))}
    </View>
  )
}

export default ShowReviews