import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { s } from "../styles/Global";

const CardJobsNew = (props) => {
  const [date_curr, setDate_cur]= useState()
  const {
    images,
    title,
    company_name,
    city,
    state,
    salary_from,
    salary_to,
    type,
    created_at
  } = props
  let currentDate = new Date()
  // useEffect(()=>{
  //   currentDate = new Date()
  //   // setDate_cur(currentDate)
  // },[])
  let postedDateArr = created_at.split(/( )/)
  let date_pos = postedDateArr[0]
  let time_pos = postedDateArr[2]

  let year_pos = date_pos.split('-')[0]
  let month_pos = date_pos.split('-')[1]
  let day_pos = date_pos.split('-')[2]

  let hrs_pos = time_pos.split(':')[0]
  let mins_pos = time_pos.split(':')[1]
  let secs_pos = time_pos.split(':')[2]

  // console.log(postedDateArr)
  // console.log("date = ",date_pos)
  // console.log("time= ",time_pos)
  // console.log("yr= ",year_pos, " mon= ",month_pos, " day= ",day_pos)
  // console.log("hr= ",hrs_pos, " min= ",mins_pos, " sec= ",secs_pos)

  let total_time_in_secs = year_pos

  let year_cur = currentDate.getFullYear()
  let month_cur = currentDate.getMonth()
  let day_cur = currentDate.getDay()
  let hrs_cur = currentDate.getHours()
  let mins_cur = currentDate.getMinutes()
  let secs_cur = currentDate.getSeconds()
  // let year_diff = 
  return (
    <View style={[styles.container]}>
      <View style={[styles.r1, s.row]}>
        <View style={[styles.imgWrapper]}>
          <Image
            style={[styles.img]}
            source={{ uri: "https://www.addressguru.in/images/" + images[0] }}
          />
        </View>
        <View style={[s.sb, { width: "76%", paddingBottom: 5}]}>
          <View style={[]}>
            <Text style={[s.f15, { color: "#2D6A9D", fontWeight: "500", paddingBottom: 5 }]}>
              {title}
            </Text>
          </View>
          <View>
            <Text style={[ s.cgray]}>
              {city}, {state}
            </Text>
          </View>
          <View>
            <Text style={[s.cgry,s.fwb,{}]}>{company_name.substring(0,32)}</Text>
          </View>
        </View>
      </View>
      <View style={[s.row, s.sb,s.cgray ,{ paddingRight: 5 }]}>
        <View>
          <View>
            <Text style={[s.fwb, s.tc,s.cgray, {}]}>Job Type</Text>
          </View>
          <View>
            <Text>{type}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={[s.fwb, s.cgray,s.tc]}>Salary</Text>
          </View>
          <View>
            <Text style={[s.cgray]}>
              {salary_from}-{salary_to}
            </Text>
          </View>
        </View>
        <View>
          <View>
            <Text style={[s.fwb, s.cgray ,s.tc]}>Posted</Text>
          </View>
          <View>
            <Text style={[s.cgray]}>{created_at}</Text>
            {/* <Text>{year_cur+"-"+month_cur+"-"+day_cur}{" "}{hrs_cur+"-"+mins_cur+"-"+secs_cur}</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "98%",
    backgroundColor: "white",
    marginVertical: 5,
    elevation: 1,
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10
  },
  r1:{
    marginBottom: 10
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
    borderWidth:1,
    borderColor: 'gray'
  },
});

export default CardJobsNew;
