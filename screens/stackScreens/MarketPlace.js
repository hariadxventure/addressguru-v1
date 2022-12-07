import { View, Text, StyleSheet, ScrollView, Animated, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import { productsData } from "../../data/ProductsData";
import CommonHeader from "../../components/CommonHeader";

const MarketPlace = (props) => {
  const [prodData, setProdData] = useState(productsData.records)
  const [refreshing, setRefreshing] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  const getProducts = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/products")
      setRefreshing(false)
      setProdData(data?.records)
    }
    getData()
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <CommonHeader scrollY={scrollY} menuUrl="https://www.addressguru.in/api/marketplace/categories"/>
      </View>
      <FlatList
        key={"_"}
        data={prodData}
        renderItem={({item})=><CardProduct  {...item} {...props}/>}
        keyExtractor={item=>"_"+item.id}
        onRefresh={()=>getProducts()}
        refreshing={refreshing}
        contentContainerStyle={[s.pd5,{paddingBottom:110}]}
        columnWrapperStyle={[s.se]}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
