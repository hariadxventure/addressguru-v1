import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../stackScreens/Home'
import Search from '../stackScreens/Search'
import ListingsPage from '../stackScreens/ListingsPage'
import CommonLandingPage from '../stackScreens/CommonLandingPage'
import CityPage from '../stackScreens/CityPage'
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
      <Stack.Screen name='CityPage' component={CityPage}/>
      <Stack.Screen name='ListingsPage' component={ListingsPage}/>
      <Stack.Screen name='CommonLandingPage' component={CommonLandingPage}/>
    </Stack.Navigator>
  )
}

export default HomeStack

// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //