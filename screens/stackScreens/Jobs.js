import { View, Text, StyleSheet, ScrollView, Animated, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import CardJobsNew from "../../components/CardJobsNew";
import CommonHeader from "../../components/CommonHeader";
import { CityContext } from "../../context/CityContextProvider";
import { useContext } from "react";

const Jobs = (props) => {
  const [jobData, setJobData] = useState([])
  const [sortOrder, setSortOrder] = useState("DESC")
  const [activeCat, setActiveCat] = useState("All")
  const [categories, setCategories] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const {city} = useContext(CityContext)

  const getJobsData = ()=>{
    async function getData(){
      setRefreshing(true)
      let url1 = ""
      if(activeCat=="All"){
        url1 = "https://www.addressguru.in/api/jobs?city="+city
      }else{
        url1 = "https://www.addressguru.in/api/jobs?city="+city+"&category="+activeCat+"&sort=amount&order="+sortOrder
      }
      const {data} = await apiData(url1)
      setRefreshing(false)
      setJobData(data?.records)
    }
    getData()
  } 
  useEffect(()=>{
   getJobsData()
  },[city, sortOrder, activeCat])

  useEffect(()=>{
    const getCategoriesData = async()=>{
      const {data} = await apiData("https://www.addressguru.in/api/job/categories")
      setCategories(data)
    }
    getCategoriesData()
  },[])

  const handleSearch=(searchVal)=>{
    props.navigation.navigate('SearchPage',{
      screenName: "Jobs",
      searchVal: searchVal
    })
  }
 
  return (
    <View style={[{position:'relative'}]}>
      <View>
        <CommonHeader 
        placeholder={"Search Jobs"}
        menuUrl="https://www.addressguru.in/api/job/categories"
        screenName="Jobs"
        handleSearch={handleSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
        categories={categories}
        />
      </View>
      {jobData.length==0 && !refreshing?(
         <View style={[ s.container, s.pdv10]}>
         {city=="Select City"?(
           <Text style={[s.f25, s.cgray]}>
           Plese select a city first
         </Text>
         ):(
           <Text style={[s.f25, s.cgray]}>
           No data found
         </Text>
         )}
       </View>
      ):(
        <FlatList
          data={jobData}
          renderItem={({item})=><CardJobsNew {...props} {...item}/>}
          keyExtractor={item=>item.id}
          onRefresh={()=>getJobsData()}
          refreshing={refreshing}
          contentContainerStyle={{
            paddingBottom: 70,
            paddingTop: 7,
            alignItems: 'center'
          }}
        />
      )}
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
