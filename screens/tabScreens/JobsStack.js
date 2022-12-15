import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jobs from '../stackScreens/Jobs'
import Search from '../stackScreens/SearchResults'
import LandingPageJob from '../stackScreens/LandingPageJob'

const Stack = createNativeStackNavigator()
const JobsStack = () => {

  return (
    <Stack.Navigator
    initialRouteName='Jobs'
    screenOptions={{
     headerShown: false
    }}
    >
      <Stack.Screen name='Jobs' component={Jobs}/>
      <Stack.Screen name='LandingPageJob' component={LandingPageJob}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default JobsStack


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //