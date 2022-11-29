import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MarketPlace from '../stackScreens/MarketPlace'
import Search from '../stackScreens/Search'

const Stack = createNativeStackNavigator()
const MarketPlaceStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='MarketPlace'
      screenOptions={{
      headerShown: false
      }}
    >
      <Stack.Screen name='MarketPlace' component={MarketPlace}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default MarketPlaceStack