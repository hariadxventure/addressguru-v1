import { View, Text, StyleSheet, ScrollView, Animated, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import { productsData } from "../../data/ProductsData";
import CommonHeader from "../../components/CommonHeader";
import { CityContext } from "../../App";
import { useContext } from "react";
import { useCallback } from "react";

const MarketPlace = (props) => {
  const [prodData, setProdData] = useState(productsData.records)
  const [refreshing, setRefreshing] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const {city} = useContext(CityContext)
  const getProducts = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/products?city="+city)
      setRefreshing(false)
      setProdData(data?.records)
    }
    getData()
  }

  useEffect(()=>{
    getProducts()
  },[city])

  const renderItem = useCallback(({item})=><CardProduct  {...item} {...props}/>)
  return (
    <View style={[{position:'relative', top:-scrollY}]}>
      <View>
        <CommonHeader scrollY={scrollY} menuUrl="https://www.addressguru.in/api/marketplace/categories"/>
      </View>
      {prodData.length==0 && !refreshing?(
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
          key={"_"}
          data={prodData}
          renderItem={renderItem}
          keyExtractor={item=>"_"+item.id}
          onRefresh={()=>getProducts()}
          refreshing={refreshing}
          contentContainerStyle={[s.pd5,{paddingBottom:70}]}
          columnWrapperStyle={[s.se]}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
