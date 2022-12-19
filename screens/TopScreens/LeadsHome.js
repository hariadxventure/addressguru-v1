import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Business from './Business'
import Marketplace from './Marketplace'
import JobEnquiries from './JobEnquiries'
const Tab = createMaterialTopTabNavigator()
const LeadsHome = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Business'
    >
      <Tab.Screen name='Business' component={Business}
      options={{
        title: "Business"
      }}
      />
      <Tab.Screen name='LeadsMarketPlace' component={Marketplace}
      options={{
        title: "Marketplace"
      }}
      />
      <Tab.Screen name='JobEnquiries' component={JobEnquiries}
      options={{
        title: "Job Enquiries"
      }}
      />
    </Tab.Navigator>
  )
}

export default LeadsHome