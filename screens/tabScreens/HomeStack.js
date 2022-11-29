import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../stackScreens/Home'
import Search from '../stackScreens/Search'
const Stack =  createNativeStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator
       initialRouteName='Home'
       screenOptions={{
        headerShown: false
       }}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default HomeStack