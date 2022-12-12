// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import About from './screens/drawerScreens/About';
// import BecomeAPartner from './screens/drawerScreens/BecomeAPartner';
// import ContactUs from './screens/drawerScreens/ContactUs';
// import InfringementPolicy from './screens/drawerScreens/InfringementPolicy';
// import MyProfile from './screens/drawerScreens/MyProfile';
// import OurPlans from './screens/drawerScreens/OurPlans';
// import PostingRules from './screens/drawerScreens/PostingRules';
// import PrivacyPolicy from './screens/drawerScreens/PrivacyPolicy';
// import Sidebar from './screens/drawerScreens/Sidebar';
// import Home from './screens/stackScreens/Home';
// import LogoTitle from './components/LogoTitle';
// import { s } from './styles/Global';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import TabHome from './screens/drawerScreens/TabHome';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import apiData from './methods/getApi';
// import SelectCityBtn from './components/SelectCityBtn';

// const Drawer = createDrawerNavigator()
// export default function App() {
//   const [city, setCity] = useState("Select City")
//   const getCity = (city)=>{
//     setCity(city)
//   }

//   return (
//     <NavigationContainer >
//       <Drawer.Navigator
//       initialRouteName='Home'
//       screenOptions={{
//         drawerStyle:{
//           // backgroundColor: "#003e7a",
//           fontSize: 30
//         },
//         drawerLabelStyle:{
//           fontSize: 18,
//           padding:0
//         },
//         headerTitle:(props)=><LogoTitle {...props}/>,
//         headerRight:(props)=>(
//           <SelectCityBtn city={city} setCity={setCity}/>
//         ),
//         headerStyle:{
//           // backgroundColor: 'red',
//            height: 75
//           },
//         // headerTitleStyle:{textAlign: 'center' }
//         // drawerActiveBackgroundColor: "white",
//         // drawerActiveTintColor: "#003e7a",
//         // drawerInactiveTintColor: 'white'
//       }}
//       drawerContent={props=><Sidebar {...props}/>}
//       >
//         <Drawer.Screen name='TabHome' component={TabHome}
//         options={{
//           drawerLabel: "Home",
//           // headerTitle: "Address Guru",
//           drawerIcon:({color})=><Icon name='home' size={30} color={color}/>
//         }}
//         />
//         <Drawer.Screen name='About' component={About}/>
//         <Drawer.Screen name='Contact' component={ContactUs}/>
//         <Drawer.Screen name='Partner' component={BecomeAPartner}/>
//         <Drawer.Screen name='Profile' component={MyProfile}/>
//         <Drawer.Screen name='Privacy' component={PrivacyPolicy}/>
//         <Drawer.Screen name='Plans' component={OurPlans}/>
//         <Drawer.Screen name='PostingRules' component={PostingRules}/>
//         <Drawer.Screen name='Infringement' component={InfringementPolicy}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });









// // ========================================================= //
//         // Designed and Developed by Hari Joshi, //
//                 // contact- 7906519104, //
//         // email: mr.hariprasadjoshi@gmail.com //
// // ========================================================== //
