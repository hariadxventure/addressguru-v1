import { View, Text, StyleSheet, ScrollView, Animated, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import CardJobsNew from "../../components/CardJobsNew";
import CommonHeader from "../../components/CommonHeader";

const Jobs = () => {
  const [jobData, setJobData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const fetchData = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/jobs")
      setRefreshing(false)
      setJobData(data?.records)
    }
    getData()
  } 
  useEffect(()=>{
   fetchData()
  },[])
 
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <CommonHeader scrollY={scrollY} menuUrl="https://www.addressguru.in/api/job/categories"/>
      </View>
      <FlatList
        data={jobData}
        renderItem={({item})=><CardJobsNew {...item}/>}
        keyExtractor={item=>item.id}
        onRefresh={()=>fetchData()}
        refreshing={refreshing}
        contentContainerStyle={{
          paddingBottom: 110,
          paddingTop: 7,
          alignItems: 'center'
        }}
      />
      {/* <ScrollView onScroll={e=>{
        // setScrollY(e.nativeEvent.contentOffset.y)
        setScrollY(0)
        if (e.nativeEvent.contentOffset.y>10) {
          setScrollY(55)
        }
      }}>
        <View style={[s.row, s.wrp, s.se, s.pd5, {paddingBottom: 80, backgroundColor: '#EBF5FF'}]}>
          {jobData.map(item=><CardJobsNew key={item.id} {...item}/>)}
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Jobs;
