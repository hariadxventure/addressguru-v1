import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ad2 from "../../components/Ad2";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { s } from "../../styles/Global";
import EnquiryForm from "../../components/EnquiryForm";
import apiData from "../../methods/getApi";
import UseFullInfo from "../../components/UseFullInfo";

const LandingPageJob = ({ route }) => {
  const [loading, setLoading] = useState(false)
  const [cats, setCats] = useState([])
  const [subCats, setSubCats] = useState([])
  
  const getJobDetails = ()=>{
    async function getData(){
      setLoading(true)
      const {data} = await apiData(`https://www.addressguru.in/api/marketplace/categories`)
      setLoading(false)
      setCats(data)
    }
    getData()
  }
  useEffect(()=>{
    getJobDetails()
  },[])

  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={[s.container, s.pd10, {}]}>
          <Image
            style={{ width: "100%", resizeMode: "contain" }}
            source={require("../../assets/others/AdMarketPlace.jpg")}
          />
        </View>
        <View
          style={[
            s.pdh5,
            {
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 10,
            },
          ]}
        >
          <Text style={[s.f28, s.fwb, s.cgray]}>{route.params.title}</Text>
          <Text style={[{ paddingTop: 10 }]}>
            {route.params.locality} / {route.params.city} / {route.params.state}
          </Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Image
            style={[styles.img]}
            source={{
              uri: "https://www.addressguru.in/images/" + route.params.img,
            }}
          />
        </View>
        <View
          style={[s.pd5, { alignItems: "flex-end", paddingHorizontal: 10 }]}
        >
          <Text>Posted Date: 17 oct, 2020</Text>
        </View>
        <View style={[s.pd10]}>
         <View style={[s.bgColWh, s.pd5,{borderRadius: 5}]}>
         <View style={[{ padding: 10}]}>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{route.params.cat}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="tag" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>{route.params.subCat}</Text>
            </View>
            <View style={[s.row, s.pdv5, {alignItems: 'center'}]}>
              <Icon name="map-marker" size={20} style={[s.pdh5]} />
              <Text style={[s.f18, s.cgray]}>
                {route.params.city} / {route.params.state}
              </Text>
            </View>
          </View>
          <View style={[s.row, s.pdh10]}>
            <View style={[s.row, s.pd10,s.br10,{backgroundColor: 'rgba(255, 0, 0, 0.1)', alignItems: 'center'}]}>
              <Icon name="phone" size={20} color='red'/>
              <Text style={[s.cgray, s.f18,{paddingLeft:5,}]}>Call</Text>
            </View>
            <View style={[s.row, s.pd10,s.br10,{backgroundColor: 'rgba(255, 0, 0, 0.1)', alignItems: 'center',marginLeft: 10}]}>
              <Icon name="whatsapp" size={20} color='red'/>
              <Text style={[s.cgray, s.f18,{paddingLeft:5}]}>Chat</Text>
            </View>
          </View>
          <View style={[s.container,{marginTop: 15}]}>
            <View style={[{width: "98%", elevation: 1, margin: 5,backgroundColor: '#FDFDFD'}]}>
              <Text style={[s.f18, s.cgray, {position: 'absolute', backgroundColor: 'white', padding: 3, top: -17, left: 10}]}>share on</Text>
              <View style={[s.row]}>
                <TouchableOpacity>
                  <Icon5 name="whatsapp-square" size={30} color="#25d366" style={{ margin: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon5 name="facebook-square" size={30} color="#3b5998" style={{ margin: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon5 name="linkedin" size={30} color="#0a66c2" style={{ margin: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon5 name="twitter-square" size={30} color="#55acee" style={{ margin: 10 }} />
                </TouchableOpacity>
                </View>
            </View>
          </View>
         </View>
          <View style={[s.row, s.sb, s.pdh5, {paddingVertical: 10}]}>
              <TouchableOpacity>
                <View style={[s.row]}>
                  <Icon name="times-rectangle" size={20} color="red" />
                  <Text style={[s.pdh5, {color: 'red'}]}>Report</Text>
                </View>
              </TouchableOpacity>
            <View>
              <Text style={[s.fwb, s.cgray]}>Ad Id: 34234234</Text>
            </View>
          </View>
          {/* About */}
          <View style={[s.bgColWh, s.pdh5 ,s.pd10, s.sb,{marginVertical: 5, paddingHorizontal: 10 }]}>
            <View style={[{borderBottomWidth: 1, borderBottomColor: 'gray', paddingVertical: 10}]}>
              <Text style={[s.f18]}>About us</Text>
            </View>
            <View style={[s.pdv5]}>
              <Text style={[s.f17, s.cgray, {lineHeight: 25}]}>
                {route.params.about}
              </Text>
            </View>
            <View style={[{paddingVertical: 10}]}>
              <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary Period: {route.params.salaryPeriod}</Text>
              <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Position Type: {route.params.positionType}</Text>
              <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary from: {route.params.salary_from}</Text>
              <Text style={[s.f17, s.cgray ,s.fwb, {lineHeight: 25}]}>Salary to: {route.params.salary_to}</Text>
            </View>
            <View style={[s.row, s.sb]}>
              <View>
                <View style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>State</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{route.params.state}</Text>
                </View>
              </View>
              <View>
                <View  style={[{borderBottomWidth: 1, paddingVertical: 5}]}>
                  <Text style={[s.f22, s.fwb, s.cgray]}>District</Text>
                </View>
                <View style={[{paddingVertical: 5}]}>
                  <Text style={[s.f15]}>{route.params.city}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* About */}
          <View style={[s.bgColWh, {padding: 10, marginVertical: 5, height: 200}]}>
            <Text>Map</Text>
          </View>
          {/* <View style={[s.bgColWh, s.pd10, {marginVertical: 5, borderRadius: 5, paddingVertical: 20}]}>
            <View style={[{borderBottomWidth: 1, paddingVertical: 10}]}>
              <Text  style={[s.f20, s.cgray]}>OverView - {route.params.title}</Text>
            </View>
            <View style={[{paddingTop: 5}]}>
              <Text  style={[s.f16, s.cgray, {lineHeight:23}]}>
                {route.params.about}
              </Text>
            </View>
          </View> */}
          <View>
            <EnquiryForm />
          </View>
          <UseFullInfo/>
        </View>
      </View>
    </ScrollView>
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

export default LandingPageJob;
