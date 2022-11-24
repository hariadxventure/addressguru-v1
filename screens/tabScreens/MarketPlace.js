import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import { productsData } from "../../data/ProductsData";
import HeaderMarketPlace from "../../components/HeaderMarketPlace";

const MarketPlace = () => {
  const [prodData, setProdData] = useState(productsData.records)
  const [scrollY, setScrollY] = useState(0)
 
  useEffect(()=>{
    async function getData(){
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/products")
      setProdData(data?.records)
      console.log("data==================> ", data.records)
    }
    getData()
  },[])
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <HeaderMarketPlace scrollY={scrollY}/>
      </View>
      <ScrollView onScroll={e=>{
        // setScrollY(e.nativeEvent.contentOffset.y)
        setScrollY(0)
        if (e.nativeEvent.contentOffset.y>10) {
          setScrollY(55)
        }
      }}>
        <View style={[s.row, s.wrp, s.se, s.pd5, {paddingBottom: 80, backgroundColor: '#EBF5FF'}]}>
          {prodData.map(item=><CardProduct key={item.id} {...item}/>)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
