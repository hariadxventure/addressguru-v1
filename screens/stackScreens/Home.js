import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import CarouselMenu from "../../components/CarouselMenu";
import { dataMp1 } from "../../data/mp1Data";
import CardMP1 from "../../components/CardMP1";
import { s } from "../../styles/Global";
import CardAd from "../../components/CardAd";
import SecHeader from "../../components/subComponents/HomeScreen/SecHeader";
import CardProduct from "../../components/CardProduct";
import CustomSearchBar from "../../components/CustomSearchBar";
import CommonHeader from "../../components/CommonHeader";
import apiData from "../../methods/getApi";
import { useEffect } from "react";
import { useState } from "react";
import { CityContext } from "../../context/CityContextProvider";
import { useContext } from "react";
const Home = (props) => {
  const [prodData, setProdData] = useState([])
  const [featuredData, setFeaturedData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const { city } = useContext(CityContext)
  const getProducts = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/products?city="+city)
      setRefreshing(false)
      setProdData(data?.records)
    }
    getData()
  }
  const getFeatured = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData("https://www.addressguru.in/api/marketplace/featured?city="+city)
      setRefreshing(false)
      setFeaturedData(data)
    }
    getData()
  }

  useEffect(()=>{
    getProducts()
    getFeatured()
  },[city, ])
  return (
    <>
    <CommonHeader 
    hideFilter={true} 
    placeholder={"Search"}
     screenName="Home"/>
    <ScrollView>
      <View style={styles.marketPlace1}>
        <SecHeader title={"Popular in Dehradun"}/>
        <View style={styles.mp1Container}>
          {dataMp1.map((item) => (
            <CardMP1 key={item.id} {...item} {...props} />
          ))}
        </View>
      </View>
      <View style={styles.sec2}>
        <View style={styles.carouselBg}></View>
        <CarouselMenu {...props} />
      </View>
      <CardAd
        imgSrc={require("../../assets/others/ad3.jpg")}
        style={{ width: "100%" }}
        sendTo={'PostAd'}
        {...props}
      />
      <CardAd
        imgSrc={require("../../assets/others/ad4.jpg")}
        style={{ width: "100%" }}
        {...props}
      />
      <View style={[styles.card, s.pdv10,s.bgColWh, s.mv5]}>
        <SecHeader title={"Marketplace"} sendTo="MarketPlace" {...props}/>
        <CardAd
          imgSrc={require("../../assets/others/ad5.jpg")}
          style={{ width: "100%" }}
          sendTo={'PostAd'}
          {...props}
        />
        <ScrollView horizontal contentContainerStyle={[{ paddingRight: 90}]}>
          {featuredData.slice(0,8).map((el,idx)=><CardProduct key={idx} {...el} {...props} style={{maxWidth: 180, minWidth:180 , marginHorizontal: 10, backgroundColor: '#F3F3F3'}} isFeatured={true}/>)}
        </ScrollView>
        {prodData?.length != 0?(
          <View style={[styles.featured, s.container, s.se ,s.row ,s.wrp]}>
              {prodData?.slice(0,4).map((el, idx)=><CardProduct key={idx} {...el} {...props}/>)}
          </View>
        ):(null)}
      </View>
      <CardAd
        imgSrc={require("../../assets/others/ad6.jpg")}
        style={{ height: 250, width: "100%" }}
        sendTo={'Jobs'}
        {...props}
      />
      <View style={s.pdb15}></View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mp1Container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  marketPlace1: {
    padding: 10,
    paddingTop: 15,
    // backgroundColor: "pink",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  sec2: {
    // backgroundColor: 'gray',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    paddingBottom: 12,
    paddingTop: 20,
  },
  carouselBg: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 350,
    backgroundColor: "orange",
  },
  featured: {
    borderTopColor: '#F3F3F3',
    borderTopWidth: 1,
  },
  card: {
    
  }
});

export default Home;

// ========================================================= //
// Designed and Developed by Hari Joshi, //
// contact- 7906519104, //
// email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //
