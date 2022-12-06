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
import ShowRating from "../../components/ShowRating";
import CtaBtns from "../../components/CtaBtns";
import ShareSec from "../../components/ShareSec";
import FacilitySingle from "../../components/FacilitySingle";
import ListFacilities from "../../components/ListFacilities";
import DummyAd from "../../components/DummyAd";
import ListPayment from "../../components/ListPayment";
import ShowMap from "../../components/ShowMap";

const CommonLandingPage = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [listingData, setListingData] = useState({});

  const getListingDetails = () => {
    async function getData() {
      setLoading(true);
      const { data } = await apiData(
        "https://www.addressguru.in/api/listing?slug=" + route.params.slug
      );
      setLoading(false);
      setListingData(data);
    }
    getData();
  };
  useEffect(() => {
    getListingDetails();
  }, []);

  console.log("listing data= ", listingData.slug);

  return (
    <>
      {loading ? (
        <View
          style={[
            s.container,
            { flex: 1, height: "100%", alignItems: "center" },
          ]}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <ScrollView>
          <View style={[styles.container]}>
            <DummyAd />
            <View style={[s.pdh10, s.pdv10, s.bgColWh]}>
              <Text style={[s.f21, s.fwb, s.cLightBlue, s.pdl5]}>
                {listingData.business_name}
              </Text>
              <Text style={[{ paddingTop: 0, paddingLeft: 5 }]}>
                {listingData?.business_address}
              </Text>
            </View>
            <View style={[s.bgColWh, {marginTop: 10}]}>
              <View style={[{ padding: 10 }]}>
                <Image
                  style={[styles.img]}
                  source={{
                    uri:
                      "https://www.addressguru.in/images/" + listingData.photo,
                  }}
                />
              </View>
              <View style={[s.bgColWh, s.pd5, { borderRadius: 5 }]}>
                <View style={[{ padding: 10 }]}>
                  <View style={[s.row, s.pdv5, s.alICenter]}>
                    <Icon
                      name={listingData?.category?.icon}
                      size={16}
                      color={listingData?.category?.colors}
                      style={[s.pdh5, s.tc, { width: 27 }]}
                    />
                    <Text style={[s.f18, s.cgray]}>
                      {listingData.category_name}
                    </Text>
                  </View>
                  <View style={[s.row, s.pdv5, s.alICenter]}>
                    <Icon
                      name="map-marker"
                      size={20}
                      style={[s.pdh5, s.tc, { width: 27 }]}
                    />
                    {listingData?.personals ? (
                      <Text style={[s.f18, s.cgray, { width: "97%" }]}>
                        {listingData?.personals[0]?.city} /{" "}
                        {listingData?.personals[0]?.state}
                      </Text>
                    ) : null}
                  </View>
                  <View style={[s.row, s.pdv5, s.alICenter]}>
                    <Icon
                      name="eye"
                      size={16}
                      style={[s.pdh5, s.tc, { width: 27 }]}
                    />
                    <Text>{listingData?.views?.views}</Text>
                  </View>
                  <ShowRating
                    ratings={listingData?.ratings}
                    style={{ paddingVertical: 10, paddingLeft: 5 }}
                  />
                </View>
                <CtaBtns />
                <ShareSec />
                <View style={[s.row, s.alICenter, s.pd10,{justifyContent: 'flex-end'}]}>
                    <Icon name="hand-o-right" color={'blue'} size={25}/>
                  <Text style={[{paddingLeft: 5}]}>
                      Claim This Business
                  </Text>
                </View>
              </View>
            </View>
            <View style={[s.pd10]}>
              <View style={[s.row, s.sb, s.pdh5, { paddingVertical: 10 }]}>
                <TouchableOpacity>
                  <View style={[s.row]}>
                    <Icon name="times-rectangle" size={20} color="red" />
                    <Text style={[s.pdh5, { color: "red" }]}>Report</Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Text style={[s.fwb, s.cgray]}>Ad Id: 34234234</Text>
                </View>
              </View>
              <View
                style={[
                  s.bgColWh,
                  s.pdh5,
                  s.pd10,
                  s.sb,
                  { marginVertical: 5, paddingHorizontal: 10 },
                ]}
              >
                <View
                  style={[
                    {
                      borderBottomWidth: 1,
                      borderBottomColor: "gray",
                      paddingVertical: 10,
                    },
                  ]}
                >
                  <Text style={[s.f18]}>About us</Text>
                </View>
                <View style={[s.pdv5]}>
                  <Text style={[s.f17, { lineHeight: 25 }]}>
                    {listingData.ad_description}
                  </Text>
                </View>
                <View>
                  <ListFacilities data={listingData} subData ="facility" name="Facilities"/>
                  <ListFacilities data={listingData} subData="course" name="Course"/>
                  <ListFacilities data={listingData} subData="service" name="Services"/>
                  <ListPayment data={listingData}/>
                </View>
                <View style={[s.row, s.sb]}>
                  <View>
                    <View
                      style={[{ borderBottomWidth: 1, paddingVertical: 5 }]}
                    >
                      <Text style={[s.f22, s.fwb, s.cgray]}>State</Text>
                    </View>
                    <View style={[{ paddingVertical: 5 }]}>
                      {listingData?.personals ? (
                        <Text style={[s.f15]}>
                          {" "}
                          {listingData?.personals[0]?.state}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                  <View>
                    <View
                      style={[{ borderBottomWidth: 1, paddingVertical: 5 }]}
                    >
                      <Text style={[s.f22, s.fwb, s.cgray]}>District</Text>
                    </View>
                    <View style={[{ paddingVertical: 5 }]}>
                      {listingData?.personals ? (
                        <Text style={[s.f15]}>
                          {" "}
                          {listingData?.personals[0]?.city}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>
              {listingData.map != null && (
                <View
                style={[
                  s.bgColWh,
                  { marginVertical: 5, height: 257 },
                ]}
              >
                <ShowMap data={listingData.map}/>
              </View>
              )}
              <View>

              </View>
              <View>
                <EnquiryForm />
              </View>
              <UseFullInfo />
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

export default CommonLandingPage;
