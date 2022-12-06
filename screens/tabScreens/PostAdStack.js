import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PostAd from '../stackScreens/PostAd'
import Search from '../stackScreens/Search'

const Stack = createNativeStackNavigator()
const PostAdStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='PostAd'
      screenOptions={{
      headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={PostAd}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}

export default PostAdStack


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //