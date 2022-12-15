import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct";
import { s } from "../../styles/Global";
import Ad2 from "../../components/Ad2";
import apiData from "../../methods/getApi";
import { productsData } from "../../data/ProductsData";
import CommonHeader from "../../components/CommonHeader";
import { CityContext } from "../../context/CityContextProvider";
import { useContext } from "react";
import { useCallback } from "react";

const MarketPlace = (props) => {
  const [prodData, setProdData] = useState(productsData.records);
  const [featuredData, setFeaturedData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { city } = useContext(CityContext);

  const getAllData = () => {
    async function getData() {
      let arr1 = [];
      let arr2 = [];
      let arr = [];
      setRefreshing(true);
      const { data: data1 } = await apiData(
        "https://www.addressguru.in/api/marketplace/featured?city=" + city
      );
      arr1.push(...data1);
      arr1 = arr1.map((obj) => ({ ...obj, isFeatured: true }));

      const { data: data2 } = await apiData(
        "https://www.addressguru.in/api/marketplace/products?city=" + city
      );
      arr2.push(...data2?.records);

      while (arr1.length + arr2.length) {
        if (arr1.length) {
          arr.push(arr1.splice(0, 4));
          if (arr2.length) {
            arr.push(arr2.splice(0, 6));
          }
        } else {
          if (arr2.length) {
            arr.push(arr2.splice(0));
          }
        }
      }
      setNewData(arr);
      setRefreshing(false);
    }
    getData();
  };

  const handleSearch=(searchVal)=>{
    props.navigation.navigate('SearchPage',{
      screenName: "MarketPlace",
      searchVal: searchVal
    })
  }

  useEffect(() => {
    getAllData();
  }, [city]);

  const renderItem = useCallback(({ item, index }) => {
    return (
      <View style={[s.row ,s.sb,s.wrp, { width: "100%" }]}>
        {item.map((el, idx) => (
          <CardProduct key={idx} {...el} {...props} />
        ))}
      </View>
    );
  });
  return (
    <View style={[{ position: "relative", top: -scrollY }]}>
      <View>
        <CommonHeader
          placeholder={"Search Products"}
          menuUrl="https://www.addressguru.in/api/marketplace/categories"
          screenName="MarketPlace"
          handleSearch={handleSearch}
        />
      </View>
      {newData.length == 0 && !refreshing ? (
        <View style={[s.container, s.pdv10]}>
          {city == "Select City" ? (
            <Text style={[s.f25, s.cgray]}>Plese select a city first</Text>
          ) : (
            <Text style={[s.f25, s.cgray]}>No data found</Text>
          )}
        </View>
      ) : (
        <>
          {/* <View style={[ s.container, s.se ,s.row ,s.wrp,{justifyContent: 'flex-start', paddingLeft: 10}]}>
          {featuredData?.slice(0,4).map((el, idx)=><CardProduct key={idx} {...el} {...props} isFeatured={true}/>)}
        </View> */}
          <FlatList
            // key={"_"}
            data={newData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            onRefresh={() => getAllData()}
            refreshing={refreshing}
            contentContainerStyle={[s.pd5, { paddingBottom: 70 }]}
            // columnWrapperStyle={[s.se]}
            // numColumns={2}
          />
          {/* <FlatList
          key={"_"}
          data={prodData}
          renderItem={renderItem}
          keyExtractor={item=>"_"+item.id}
          onRefresh={()=>getProducts()}
          refreshing={refreshing}
          contentContainerStyle={[s.pd5,{paddingBottom:70}]}
          columnWrapperStyle={[s.se]}
          numColumns={2}
        /> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketPlace;
