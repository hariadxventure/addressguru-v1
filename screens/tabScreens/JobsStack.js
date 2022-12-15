import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jobs from '../stackScreens/Jobs'
import LandingPageJob from '../stackScreens/LandingPageJob'
import SearchResults from '../stackScreens/SearchResults'

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
      <Stack.Screen name='SearchPage' component={SearchResults}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitle: "Search Results",
        headerTintColor: "gray",
        headerTitleStyle:{fontSize:17}
      }}
      />
    </Stack.Navigator>
  )
}

export default JobsStack


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //