import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";
import calcTime1 from "../methods/calcTime1";
import calcTime from "../methods/calcTime";
import apiData from "../methods/getApi";

const CardJobsNew = (props) => {
  const [jobData, setJobData] = useState({})
  const [loading, setLoading] = useState()
  const {
    id,
    images,
    title,
    company_name,
    city,
    state,
    salary_from,
    salary_to,
    type,
    created_at,
    route,
    navigation
  } = props;

  let time_diff = calcTime(created_at)

  const handlePress = ()=>{
    navigation.navigate('LandingPageJob', {
      id: id,
    })
  }

  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.r1, s.row]}>
          <View style={[styles.imgWrapper]}>
            <Image
              style={[styles.img]}
              source={{ uri: "https://www.addressguru.in/images/" + images[0] }}
            />
          </View>
          <View style={[s.sb, { width: "77%", paddingBottom: 5,  }]}>
            <View style={[]}>
              <Text
                style={[
                  s.f15,
                  { color: "#2D6A9D", fontWeight: "500", paddingBottom: 5 },
                ]}
              >
                {title}
              </Text>
            </View>
            <View>
              <Text style={[s.cgray]}>
                {city}, {state}
              </Text>
            </View>
            <View>
              <Text style={[s.cgray, s.fwb, {}]}>
                {company_name?.substring(0, 32)}
              </Text>
            </View>
          </View>
        </View>
        <View style={[s.row, s.sb, s.cgray, { paddingRight: 5 }]}>
          <View>
            <View>
              <Text style={[s.fwb, s.tc, s.cgray, {}]}>Job Type</Text>
            </View>
            <View>
              <Text>{type}</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={[s.fwb, s.cgray, s.tc]}>Salary</Text>
            </View>
            <View>
              <Text style={[s.cgray]}>
              ???{salary_from?.substring(0,6)}{" "}-{" "}???{salary_to?.substring(0,6)}/<Text style={{fontSize: 8, fontWeight: 'bold'}}>Monthly</Text>
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={[s.fwb, s.cgray, s.tc]}>Posted</Text>
            </View>
            <View>
              <Text style={[s.cgray]}>{time_diff}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "98%",
    backgroundColor: "white",
    marginVertical: 5,
    elevation: 2,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  r1: {
    marginBottom: 10,
  },
  imgWrapper: {
    borderRadius: 50,
    width: 70,
    height: 70,
    marginRight: 7,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default CardJobsNew;
