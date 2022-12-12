import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./screens/drawerScreens/About";
import BecomeAPartner from "./screens/drawerScreens/BecomeAPartner";
import ContactUs from "./screens/drawerScreens/ContactUs";
import InfringementPolicy from "./screens/drawerScreens/InfringementPolicy";
import MyProfile from "./screens/drawerScreens/MyProfile";
import OurPlans from "./screens/drawerScreens/OurPlans";
import PostingRules from "./screens/drawerScreens/PostingRules";
import PrivacyPolicy from "./screens/drawerScreens/PrivacyPolicy";
import Sidebar from "./screens/drawerScreens/Sidebar";
import Home from "./screens/stackScreens/Home";
import LogoTitle from "./components/LogoTitle";
import { s } from "./styles/Global";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabHome from "./screens/drawerScreens/TabHome";
import { useEffect } from "react";
import { useState } from "react";
import apiData from "./methods/getApi";
import SelectCityBtn from "./components/SelectCityBtn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerHome from "./screens/parentStackScreens/DrawerHome";
import SelectCities from "./screens/parentStackScreens/SelectCities";
import { createContext } from "react";
export const CityContext = createContext();

const Stack = createNativeStackNavigator();
export default function App() {
  const [city, setCity] = useState("Select City");

  return (
    <CityContext.Provider value={{ city: city, setCity: setCity }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DraweHome"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="DrawerHome"
            component={DrawerHome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SelectCity"
            component={SelectCities}
            options={{
              title: "Select City",
              headerTitleStyle: { fontWeight: "bold" },
              // headerTintColor: "orange",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: "white",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CityContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

// ========================================================= //
// Designed and Developed by Hari Joshi, //
// contact- 7906519104, //
// email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //
