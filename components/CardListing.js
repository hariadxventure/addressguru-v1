import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { s } from "../styles/Global";
import  Icon from "react-native-vector-icons/FontAwesome";

const CardListing = (props) => {
  return (

    <View style={[styles.container, s.row]}>
      <View style={[styles.imgWrapper]}>
        <Image 
          style={[styles.img]}
          source={{uri: "https://www.addressguru.in/images/"+props.photo}}
        ></Image>
      </View>
      <View style={[styles.right]}>
        <TouchableOpacity>
          <View>
            <Text style={[
                  s.f17,
                  { color: "#2D6A9D", fontWeight: "500", paddingBottom: 5 },
                ]}>{props.name.length>55? props.name.substring(0,55)+"...":props.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={[]}>
          <Text style={[s.fw500, s.cgray]}>{props.location.length>55? props.location.substring(0,55)+"...":props.location}</Text>
        </View>
      <View style={[styles.r3, s.pdv5,s.row, s.sb]}>
          <View  style={[s.row]}>
            <View style={[s.row]}>
              <Icon name="star" size={17} color="gold"/>
              <Icon name="star" size={17} color="gold"/>
              <Icon name="star" size={17} color="gold"/>
              <Icon name="star" size={17} color="gold"/>
              <Icon name="star-half-o" size={17} color="gold"/>
            </View>
            <View>
              <Text>{5}</Text>
            </View>
          </View>
          <View>
            <Text>AG Verified</Text>
          </View>
        </View>
        <View style={[styles.r4,s.pdv5, s.row, s.sb]}>
          <TouchableOpacity>
            <View style={[styles.callbtn, s.row, {alignItems: 'center'}]}>
              <Icon name="phone" size={18}/>
              <Text style={[{marginLeft: 3}]}>Call Now</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
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
    width: '96%',
    // minWidth: "96%",
    height: 145,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 5,

  },
  imgWrapper: {
    width: '30%',
    height: '100%',
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
    resizeMode: "contain"
  },
  right: {
    width: '68%',
    marginLeft: '1.5%',
    // backgroundColor: 'green'
  },
  r3: {

  },
  r4: {

  },
  callbtn: {
      borderColor: 'orange',
      borderRadius: 5,
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5
  },
  viewDetailbtn: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
export default CardListing;
