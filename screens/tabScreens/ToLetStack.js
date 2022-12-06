import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ToLet from '../stackScreens/ToLet'
import Search from '../stackScreens/Search'

const Stack = createNativeStackNavigator()
const ToLetStack = () => {
  return (
    <Stack.Navigator
       initialRouteName='ToLet'
       screenOptions={{
        headerShown: false
       }}
    >
      <Stack.Screen name='ToLet' component={ToLet}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default ToLetStack


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //