import { View, Text, StyleSheet, ScrollView, Animated, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import { productsData } from "../../data/ProductsData";
import CommonHeader from "../../components/CommonHeader";

const MarketPlace = () => {
  const [prodData, setProdData] = useState(productsData.records)
  const [refreshing, setRefreshing] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  const fetchData = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/products")
      setRefreshing(false)
      setProdData(data?.records)
    }
    getData()
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <CommonHeader scrollY={scrollY} menuUrl="https://www.addressguru.in/api/marketplace/categories"/>
      </View>
      <FlatList
        key={"_"}
        data={prodData}
        renderItem={({item})=><CardProduct {...item}/>}
        keyExtractor={item=>"_"+item.id}
        onRefresh={()=>fetchData()}
        refreshing={refreshing}
        contentContainerStyle={[s.pd5,{paddingBottom:110}]}
        columnWrapperStyle={[s.se]}
        numColumns={2}
      />
      {/* <ScrollView onScroll={e=>{
        // setScrollY(e.nativeEvent.contentOffset.y)
        setScrollY(0)
        if (e.nativeEvent.contentOffset.y>10) {
          setScrollY(55)
        }
      }}>
        <View style={[s.row, s.wrp, s.se, s.pd5, {paddingBottom: 80, backgroundColor: '#EBF5FF'}]}>
          {prodData.map(item=><CardProduct key={item.id} {...item}/>)}
        </View>
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
