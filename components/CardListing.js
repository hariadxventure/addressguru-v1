import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import Icon from "react-native-vector-icons/FontAwesome";
import PrintStars from "./PrintStars";
import ShowRating from "./ShowRating";

const CardListing = (props) => {
  const { navigation, ratings, name, business_address, photo, slug, ph_number } = props;

  const handlePress = () => {
    navigation.navigate("CommonLandingPage", {
      slug: slug,
    });
  };

  return (
    <View style={[styles.container, s.row]}>
      <View style={[styles.imgWrapper]}>
        <TouchableOpacity onPress={handlePress}>
          <Image
            style={[styles.img]}
            source={{ uri: "https://www.addressguru.in/images/" + photo }}
            ></Image>
          </TouchableOpacity>
      </View>
      <View style={[styles.right]}>
        <TouchableOpacity onPress={handlePress}>
          <View style={[{}]}>
            <Text
              style={[
                s.f17,
                { color: "#2D6A9D", fontWeight: "500" },
              ]}
            >
              {name.length > 40 ? name.substring(0, 38).toLowerCase() + "..." : name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[]}>
          <Text style={[s.fw400, s.cgray, s.f12]}>
            {business_address.length > 30
              ? business_address.substring(0, 30).replace(/,/g,", ").split("\n") + "..."
              : business_address.replace(/,/g,", ").split("\n")}
          </Text>
        </View>
        <View style={[styles.r3, s.pdv5, s.row, s.sb, { paddingTop: 10 }]}>
          <ShowRating ratings={ratings}/>
          <View style={[s.row, { alignItems: "flex-end" }]}>
            <View style={[s.bgColOr, { borderRadius: 50, padding: 2 }]}>
              <Text style={[s.cWh, s.f12]}>AG</Text>
            </View>
            <Text style={[s.f12, { color: "green" }]}>Verified</Text>
          </View>
        </View>
        <View style={[styles.r4, s.pdv5, s.row, s.sb, { paddingTop: 10 }]}>
          <TouchableOpacity onPress={()=>Linking.openURL(`tel: ${ph_number}`)}>
            <View style={[styles.callbtn, s.row, { alignItems: "center" }]}>
              <Icon name="phone" size={18} />
              <Text style={[{ marginLeft: 3 }]}>Call Now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <View style={[styles.viewDetailbtn]}>
              <Text style={[s.cWh]}>View Details</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    // minWidth: "96%",
    height: 147,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 5,
  },
  imgWrapper: {
    width: "30%",
    height: "100%",
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    resizeMode: "contain",
    backgroundColor: "gray",
  },
  right: {
    width: "68%",
    marginLeft: "1.5%",
    // backgroundColor: 'green'
  },
  r3: {},
  r4: {},
  callbtn: {
    borderColor: "orange",
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  viewDetailbtn: {
    backgroundColor: "#2D6A9D",
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: "#2D6A9D",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
export default CardListing;
