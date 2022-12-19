import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LeadsHome from "../TopScreens/LeadsHome";
import ReviewsHome from "../TopScreens/ReviewsHome";
import ChatsHome from "../TopScreens/ChatsHome";
import Icon from "react-native-vector-icons/FontAwesome";
import { s } from "../../styles/Global";
const Tab = createMaterialTopTabNavigator();
const Leads = () => {
  return (
    <Tab.Navigator
      initialRouteName="LeadsHome"
      style={{elevation: 0}}
      // sceneContainerStyle={{backgroundColor: "orange"}}
      screenOptions={{
        // tabBarContentContainerStyle: {backgroundColor: "orange"},
        // tabBarStyle: {backgroundColor: "blue"},
        // tabBarIcon: ()=><Icon name='home'/>,
        // tabBarBadge: ()=><Text>100</Text>,
        // tabBarIndicator: (props) => {
        //   // console.log("props= ", props)
        //   return (
        //     <View
        //       style={[s.bgColGrn, { height: 2, width: '33%', ...props.style }]}
        //     ></View>
        //   );
        // },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "gray",
        tabBarPressColor: "orange",
        // tabBarIndicatorStyle: {backgroundColor: "blue"},
        // tabBarBounces: true,
        // tabBarScrollEnabled: true
        // swipeEnabled: false
      }}
    >
      <Tab.Screen
        name="LeadsHome"
        component={LeadsHome}
        options={{
          title: "Leads",
        }}
      />
      <Tab.Screen
        name="ReviewsHome"
        component={ReviewsHome}
        options={{
          title: "Reviews",
        }}
      />
      <Tab.Screen
        name="ChatsHome"
        component={ChatsHome}
        options={{
          title: "Chats",
        }}
      />
    </Tab.Navigator>
  );
};

export default Leads;
