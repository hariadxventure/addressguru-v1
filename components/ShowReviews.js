import { View, Text } from 'react-native'
import React from 'react'
import SingleReview from './subComponents/SingleReview'

const ShowReviews = () => {
  return (
    <View>
      <SingleReview />
      <SingleReview />
      <SingleReview />
      <SingleReview />
    </View>
  )
}

export default ShowReviews