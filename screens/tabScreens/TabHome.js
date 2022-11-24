import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Jobs from "./Jobs";
import Leads from "./Leads";
import PostAd from "./PostAd";
import MarketPlace from "./MarketPlace";
import Home from "./Home";
import ToLet from "./ToLet";

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white", height: 60 },
        tabBarLabelStyle: { marginBottom: 5, fontSize:12 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" color="gray" size={24} />,
        }}
      />
      <Tab.Screen
        name="Leads"
        component={Leads}
        options={{
          tabBarIcon: () => <Icon name="bell" color="gray" size={24} />,
        }}
      />
      
      <Tab.Screen
        name="MarketPlace"
        component={MarketPlace}
        options={{
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarIcon: () => (
            <Icon name="shopping-cart" color="gray" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{
          tabBarIcon: () => <Icon name="search" color="gray" size={24} />,
        }}
      />
      <Tab.Screen
        name="ToLet"
        component={ToLet}
        options={{
          tabBarIcon: ()=><Icon name="home" color="gray" size={24}/>
        }}
      />
      <Tab.Screen
        name="PostAd"
        component={PostAd}
        options={{
          tabBarIcon: () => <Icon name="plus" color="green" size={30}  style={{position: 'absolute', backgroundColor: 'white', borderRadius: 100, top: -25,padding: 15 ,paddingTop:10,}}/>,
        }}
      />
    </Tab.Navigator>
  );
};



export default TabHome;
