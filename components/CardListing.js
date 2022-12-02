import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import  Icon from "react-native-vector-icons/FontAwesome";
import PrintStars from "./PrintStars";

const CardListing = (props) => {
  let [avgRating, setAvgRating] = useState(0)
  let [fdigit, setFdigit] = useState(0)
  let [ldigit, setLdigit] = useState(0)
  let [arr1, setArr1] = useState([])
  let [arr2, setArr2] = useState([])
  const calcRating = ()=>{
    let totalStars = 0
    if(props.ratings.length==0){
      setAvgRating(0)
    }else{
      props.ratings.forEach(el => {
        totalStars += parseInt(el.rating)
      });
      setAvgRating(totalStars/props.ratings.length)
    }
  }

  useEffect(()=>{
    calcRating()
    setFdigit(prev=>(parseInt(avgRating.toPrecision(2).split('.')[0])))
    setLdigit(prev=>(parseInt(avgRating.toPrecision(2).split('.')[1])))
    setArr1(prev=>(new Array(fdigit).fill(1)))
    setArr2(prev=>(new Array(ldigit).fill(1)))
  },[])

  return (
    <View style={[styles.container, s.row]}>
      <View style={[styles.imgWrapper]}>
        <Image 
          style={[styles.img,]}
          source={{uri: "https://www.addressguru.in/images/"+props.photo}}
        ></Image>
      </View>
      <View style={[styles.right]}>
        <TouchableOpacity>
          <View style={[{height: 43}]}>
            <Text style={[
                  s.f17,
                  { color: "#2D6A9D", fontWeight: "500", paddingBottom: 5 },
                ]}>{props.name.length>54? props.name.substring(0,54)+"...":props.name}</Text>
          </View>
        </TouchableOpacity>
        <View style={[{height: 35}]}>
          <Text style={[s.fw400, s.cgray, s.f12]}>{props.business_address.length>55? props.business_address.substring(0,55).split('\n')+"...":props.business_address.split('\n')}</Text>
        </View>
      <View style={[styles.r3, s.pdv5,s.row, s.sb]}>
          <View  style={[s.row]}>
            <View style={[s.row]}>
              {
              //  arr1.map((e,i)=><Text>hari</Text>)
              }
              <PrintStars fdigit={fdigit} ldigit={ldigit}/>
              {/* <Icon name="star" size={17} color="gold"/> */}
            </View>
            <View style={[s.pdh7,{borderRadius: 5,marginLeft:0, height: 16}]}>
              <Text style={[s.cgray, {fontSize: 12}]}>{props.ratings.length}</Text>
            </View>
          </View>
          <View style={[s.row,{alignItems: 'flex-end'}]}>
            <View style={[s.bgColOr,{borderRadius: 50, padding: 2}]}>
              <Text style={[s.cWh]}>AG</Text>
            </View>
            <Text style={[s.f12,{color: 'green'}]}>Verified</Text>
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
    height: 157,
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
    height: '100%',
    width: "100%",
    borderRadius: 5,
    resizeMode: "contain",
    backgroundColor: 'gray'
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
      paddingVertical: 4
  },
  viewDetailbtn: {
    backgroundColor: '#2D6A9D',
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: '#2D6A9D',
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
export default CardListing;
