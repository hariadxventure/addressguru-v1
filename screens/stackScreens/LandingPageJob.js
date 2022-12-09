import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ad2 from "../../components/Ad2";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { s } from "../../styles/Global";
import EnquiryForm from "../../components/EnquiryForm";
import apiData from "../../methods/getApi";
import UseFullInfo from "../../components/UseFullInfo";
import CarouselSlider from "../../components/CarouselSlider";
import LoadingLarge from "../../components/LoadingLarge";
import ShareSec from "../../components/ShareSec";
import CtaBtns from "../../components/CtaBtns";
import AboutUs from "../../components/AboutUs";
import ReportBtn from "../../components/ReportBtn";

const LandingPageJob = ({ route }) => {
  const [loading, setLoading] = useState(false)
  const [jobData, setJobData] = useState({})
  
  const getJobDetails = ()=>{
    async function getData(){
      setLoading(true)
      const {data} = await apiData(`https://www.addressguru.in/api/job?id=${route?.params?.id}`)
      setLoading(false)
      setJobData(data)
    }
    getData()
  }
  useEffect(()=>{
    getJobDetails()
  },[])

  return (
   <>
    {loading?(
      <LoadingLarge/>
    ):(
      <ScrollView>
      <View style={[styles.container]}>
        <View style={[s.container, s.pd10, {}]}>
          <Image
            style={{ width: "100%", resizeMode: "contain" }}
            source={require("../../assets/others/AdMarketPlace.jpg")}
          />
        </View>
        <View
          style={[
            s.pdh5,
            {
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Text style={[s.f28, s.fwb, s.cgray]}>{jobData?.title}</Text>
          <Text style={[{ paddingTop: 10 }]}>
            {jobData?.locality} / {jobData?.city} / {jobData?.state}
          </Text>
        </View>
        <CarouselSlider entries={jobData?.medias}/>
        <View
          style={[s.pd5, { alignItems: "flex-end", paddingHorizontal: 10 }]}
        >
          <Text>Posted Date: {jobData?.date_posted}</Text>
        </View>
        <View style={[s.pd10]}>
         <View style={[s.bgColWh, s.pd5,{borderRadius: 5}]}>
         <View style={[{ padding: 10}]}>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{jobData?.category_id}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{jobData?.subcategory_id}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="map-marker" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>
                {jobData?.city} / {jobData?.state}
              </Text>
            </View>
          </View>
          <CtaBtns />
          <ShareSec/>
         </View>
          <View style={[s.row, s.sb, s.pdh5, {paddingVertical: 10}]}>
              <ReportBtn/>
            <View>
              <Text style={[s.fwb, s.cgray]}>Ad Id: {jobData.user_id}</Text>
            </View>
          </View>
          <View style={[s.bgColWh, s.pdh5 ,s.pd10, s.sb,{marginVertical: 5, paddingHorizontal: 10 }]}>
            <AboutUs data={jobData?.description}/>
            <View style={[{paddingVertical: 10}]}>
              {jobData?.salaryPeriod?(
                <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary Period: {jobData?.salaryPeriod}</Text>
              ):(null)}
              {jobData?.positionType?(
                <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Position Type: {jobData?.positionType}</Text>
              ):(null)}
              {jobData?.salary_from?(
                <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary from: {jobData?.salary_from}</Text>
              ):(null)}
              {jobData?.salary_to?(
                <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary to: {jobData?.salary_to}</Text>
              ):(null)}
              {/* <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary from: {jobData?.salary_from}</Text> */}
            </View>
            <View style={[s.row, s.sb]}>
              <View>
                <View style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>State</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{jobData?.state}</Text>
                </View>
              </View>
              <View>
                <View  style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>District</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{jobData?.city}</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <EnquiryForm />
          </View>
          <UseFullInfo/>
        </View>
      </View>
    </ScrollView>
    )}
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingVertical: 12,
    justifyContent: "center",
    // backgroundColor: 'green'
  },
  img: {
    height: 180,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
});

export default LandingPageJob;


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //
