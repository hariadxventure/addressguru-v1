import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Leads from '../stackScreens/Leads'
import Search from '../stackScreens/Search'
 
const Stack = createNativeStackNavigator()
const LeadsStack = () => {
  return (
    <Stack.Navigator
     initialRouteName='Leads'
     screenOptions={{
      headerShown: false
     }}
    >
      <Stack.Screen name='Leads' component={Leads}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default LeadsStack