import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
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
import ShowMap from "../../components/ShowMap";
import LoadingLarge from "../../components/LoadingLarge";
import DummyAd from "../../components/DummyAd";
import CtaBtns from "../../components/CtaBtns";
import ShareSec from "../../components/ShareSec";
import ReportBtn from "../../components/ReportBtn";

const LandingPageMp = ({ route }) => {
  const [loading, setLoading] = useState(false)
  const [prodData, setProdData] = useState({})

  const getProductDetails = ()=>{
    async function getData(){
      setLoading(true)
      const {data} = await apiData(`https://www.addressguru.in/api/marketplace/product?id=${route?.params?.id}`)
      setLoading(false)
      setProdData(data)
    }
    getData()
  }
  useEffect(()=>{
    getProductDetails()
  },[])
 
  return (
    <>
    {loading?(
      <LoadingLarge />
    ):(
      <ScrollView>
      <View style={[styles.container]}>
        <DummyAd />
        <View style={[s.pdh10, s.pdv10, s.bgColWh]}>
          <Text style={[s.f28, s.fwb, s.cgray]}>{prodData?.title}</Text>
          <Text style={[{ paddingTop: 10 }]}>
            {prodData?.locality} / {prodData?.city} / {prodData?.state}
          </Text>
        </View>
        <CarouselSlider entries={prodData?.medias}/>
        <View
          style={[s.pd5, { alignItems: "flex-end", paddingHorizontal: 10 }]}
        >
          <Text>Posted Date: {prodData?.date_posted}</Text>
        </View>
        <View style={[s.pd10]}>
         <View style={[s.bgColWh, s.pd5,{borderRadius: 5}]}>
         <View style={[{ padding: 10}]}>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{prodData?.category_id}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{prodData?.subcategory_id}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="map-marker" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>
                {prodData?.city} / {prodData?.state}
              </Text>
            </View>
          </View>
          <CtaBtns data={prodData?.phone} webLink={"https://"}/>
          <ShareSec />
         </View>
          <View style={[s.row, s.sb, s.pdh5, {paddingVertical: 10}]}>
          <ReportBtn  title={prodData?.business_name} listingId={prodData?.id} userId={prodData?.user_id}/>
            <View>
              <Text style={[s.fwb, s.cgray]}>Ad Id: {prodData?.user_id}</Text>
            </View>
          </View>
          <View style={[s.bgColWh, s.pdh5 ,s.pd10, s.sb,{marginVertical: 5, paddingHorizontal: 10 }]}>
            <View style={[{borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 10}]}>
              <Text style={[s.f18]}>About us</Text>
            </View>
            <View  style={[s.pdv5]}>
              <Text style={[s.f17,{lineHeight: 25}]}>
                {prodData?.description}
              </Text>
            </View>
            <View style={[s.row, s.sb]}>
              <View>
                <View style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>State</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{prodData?.state}</Text>
                </View>
              </View>
              <View>
                <View  style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>District</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{prodData?.city}</Text>
                </View>
              </View>
            </View>
          </View>
          {prodData?.map != null && (
                <View
                style={[
                  s.bgColWh,
                  { marginVertical: 5, height: 257 },
                ]}
              >
                <ShowMap data={prodData?.map}/>
              </View>
              )}
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

export default LandingPageMp;


// ========================================================= //
        // Designed and Developed by Hari Joshi, //
                // contact- 7906519104, //
        // email: mr.hariprasadjoshi@gmail.com //
// ========================================================== //
