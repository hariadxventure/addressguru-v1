import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LogoTitle from '../../components/LogoTitle'
import SelectCityBtn from '../../components/SelectCityBtn'
import { useState } from 'react'
import Sidebar from '../drawerScreens/Sidebar'
import TabHome from '../drawerScreens/TabHome'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useEffect } from 'react'
import { CityContext } from '../../App'
import { useContext } from 'react'

const Drawer = createDrawerNavigator()
const DrawerHome = (props) => {
  const {city} = useContext(CityContext)
  const {route} = props
  const handlePress = ()=>{
    props?.navigation.navigate("SelectCity")
  }

  return (
    <Drawer.Navigator
     initialRouteName='TabHome'
     screenOptions={{
      headerTitleAlign: "center",
      drawerStyle: {
        fonSize: 30
      },
      drawerLabelStyel: {
        fontSize: 18,
        padding: 0
      },
      headerTitle: (props)=><LogoTitle {...props}/>,
      headerRight: (props)=><SelectCityBtn city={city} handlePress={handlePress} {...props}/>,
      headerStyle:{
        // backgroundColor: 'red',
         height: 75
        },
      // headerTitleStyle:{textAlign: 'center' }
      // drawerActiveBackgroundColor: "white",
      // drawerActiveTintColor: "#003e7a",
      // drawerInactiveTintColor: 'white'
    }}
    drawerContent={props=><Sidebar {...props}/>}
    >
      <Drawer.Screen name='TabHome' component={TabHome}
      options={{
        drawerLabel: "home",
        // headerTitle: "address Guru"
        drawerIcon: ({color})=><Icon name='home' size={30} color={color}/>
      }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerHome