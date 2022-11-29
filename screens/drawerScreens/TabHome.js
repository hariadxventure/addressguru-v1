import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import PostAdStack from "../tabScreens/PostAdStack";
import ToLetStack from "../tabScreens/ToLetStack";
import JobsStack from "../tabScreens/JobsStack";
import LeadsStack from "../tabScreens/LeadsStack";
import HomeStack from "../tabScreens/HomeStack";
import MarketPlaceStack from "../tabScreens/MarketPlaceStack";

const Tab = createBottomTabNavigator();

const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white", height: 60 },
        tabBarLabelStyle: { marginBottom: 5, fontSize:12 },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: () => <Icon name="home" color="gray" size={24} />,
        }}
      />
      <Tab.Screen
        name="LeadsStack"
        component={LeadsStack}
        options={{
          title: "Leads",
          tabBarIcon: () => <Icon name="bell" color="gray" size={24} />,
        }}
      />
      
      <Tab.Screen
        name="MarketPlaceStack"
        component={MarketPlaceStack}
        options={{
          title: "MarketPlace",
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
        name="JobsStack"
        component={JobsStack}
        options={{
          title: "Jobs",
          tabBarIcon: () => <Icon name="search" color="gray" size={24} />,
        }}
      />
      <Tab.Screen
        name="ToLetStack"
        component={ToLetStack}
        options={{
          title: "ToLet",
          tabBarIcon: ()=><Icon name="home" color="gray" size={24}/>
        }}
      />
      <Tab.Screen
        name="PostAdStack"
        component={PostAdStack}
        options={{
          title: "PostAd",
          tabBarIcon: () => <Icon name="plus" color="green" size={30}  style={{position: 'absolute', backgroundColor: 'white', borderRadius: 100, top: -25,padding: 15 ,paddingTop:10,}}/>,
        }}
      />
    </Tab.Navigator>
  );
};



export default TabHome;
