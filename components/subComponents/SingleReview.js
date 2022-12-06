import { View, Text } from 'react-native'
import React from 'react'

const SingleReview = ({data}) => {
  return (
    <View>
      <Text>{data.name}</Text>
      <View>
        <Text>{data.rating}</Text>
        <Text>{data.created_at}</Text>
      </View>
      <Text>{data.message}</Text>
    </View>
  )
}

export default SingleReview