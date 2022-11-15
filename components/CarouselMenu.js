import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const {width, height} = Dimensions.get('window')


const CarouselMenu = () => {
  const [entries, setEntry] = useState([
    [
      { colors: "#B9714D", icon: "building-o", id: 29, name: "Architect" },
      { colors: "#692C8E", icon: "free-code-camp", id: 30, name: "Astrologer" },
      { colors: "#E41A22", icon: "car", id: 11, name: "Automobile" },
      { colors: "#E9526F", icon: "birthday-cake", id: 27, name: "Bakery" },
      { colors: "#DB8B05", icon: "rupee", id: 16, name: "Banks" },
      { colors: "#FD4174", icon: "cubes", id: 24, name: "Banquet Halls" },
      { colors: "#0C6669", icon: "bicycle", id: 47, name: "Bicycle Store" },
      {
        colors: "#5970B4",
        icon: "handshake-o",
        id: 10,
        name: "Bike & Car Rental",
      },
      {
        colors: "#FF0000",
        icon: "hospital-o",
        id: 60,
        name: "COVID-19 Centres",
      },
      {
        colors: "#9E9906",
        icon: "cutlery",
        id: 13,
        name: "Cafe & Restaurants",
      },
      {
        colors: "#F6C505",
        icon: "map-marker",
        id: 39,
        name: "Camping & Rafting",
      },
      { colors: "#F70000", icon: "medkit", id: 14, name: "Chemists" },
      { colors: "#013563", icon: "film", id: 12, name: "Cinema" },
      { colors: "#8EB443", icon: "stethoscope", id: 18, name: "Clinic" },
      {
        colors: "#26848E",
        icon: "graduation-cap",
        id: 1,
        name: "Coaching Institute",
      },
      { colors: "#4285F4", icon: "book", id: 51, name: "Colleges" },
    ],
  ]);
  console.log(entries[0])
  return (
    <View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 10, justifyContent:'center', alignItems:'center'}}>
        {entries[0].map(item=>(
        <View key={item.id} style={styles.single}>
            <Icon name={item.icon} color={item.colors} size={35}/>
            <Text style={{textAlign: 'center'}}>{item.name}</Text>
        </View>))}
      </View>
      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    single:{
        padding: 5,
        width: width/5,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CarouselMenu;
