import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import HeaderMarketPlace from "../../components/HeaderMarketPlace";
import HeaderJobs from "../../components/HeaderJobs";
import CardJobs from "../../components/CardJobs";
import CardJobsNew from "../../components/CardJobsNew";

const Jobs = () => {
  const [jobData, setJobData] = useState([])
  const [scrollY, setScrollY] = useState(0)
 
  useEffect(()=>{
    async function getData(){
      const {data} = await apiData("https://www.addressguru.in/api/jobs")
      // setJobData(data)
      setJobData(data?.records)
      // console.log("data==================> ", data.records)
    }
    getData()
  },[])
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <HeaderJobs scrollY={scrollY}/>
      </View>
      <ScrollView onScroll={e=>{
        // setScrollY(e.nativeEvent.contentOffset.y)
        setScrollY(0)
        if (e.nativeEvent.contentOffset.y>10) {
          setScrollY(55)
        }
      }}>
        <View style={[s.row, s.wrp, s.se, s.pd5, {paddingBottom: 80, backgroundColor: '#EBF5FF'}]}>
          {jobData.map(item=><CardJobsNew key={item.id} {...item}/>)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Jobs;
