import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useState } from "react";
import apiData from "../../methods/getApi";
import { useEffect } from "react";
import CustomSearchBar from "../../components/CustomSearchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import { s } from "../../styles/Global";
import { useCallback } from "react";
import { CityContext } from "../../context/CityContextProvider";
import { useContext } from "react";
const { width, height } = Dimensions.get("window");

const Single = ({ cityName, selected, navigation,setSelected }) => {
  const {city, setCity} = useContext(CityContext)
  const handleShow = ()=>{
    setSelected(cityName)
    const timeId = setTimeout(() => {
      navigation.goBack()
    }, 10);
    setCity(cityName)
  }
  return (
    <>
      {cityName != "" ? (
        <TouchableOpacity onPress={() => handleShow()}>
          <View style={[s.row, s.alICenter, styles.city]}>
            <Text style={[s.f20, s.cgray, { minWidth: "80%", paddingTop: 5 }]}>
              {cityName}
            </Text>
            {city == cityName ? (
              <Icon name="check" color={"green"} size={20} />
            ) : null}
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

const SelectCities = (props) => {
  const {route, navigation}= props
  const [refreshing, setRefreshing] = useState(false);
  const [citiesData, setCitiesData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchText, setSearchText] = useState("")
  const [filteredCities, setFilteredCities] = useState([]);

  const getCitiesData = () => {
    async function getData() {
      setRefreshing(true);
      const { data } = await apiData("https://www.addressguru.in/api/cities");
      setRefreshing(false);
      setCitiesData(data);
    }
    getData();
  };
  useEffect(() => {
    getCitiesData();
  }, []);

  const showSearchResult = (text)=>{
    setSearchText(text)
    let filteredData = citiesData?.filter((item)=>item.includes(text))
    setFilteredCities(filteredData)
  }

  const renderItem = useCallback(({ item, index }) => (
    <Single cityName={item} navigation={navigation} selected={selected} setSelected={setSelected} />
  ))
  return (
    <SafeAreaView>
      <View style={[styles.search]}>
        <CustomSearchBar style={{}} isCitySearch={true}  placeholder="Search City" showSearchResult={showSearchResult} />
      </View>
      <FlatList
        // data={citiesData}
        data={filteredCities && filteredCities.length>0? filteredCities: citiesData}
        renderItem={renderItem}
        onRefresh={() => getCitiesData()}
        refreshing={refreshing}
        initialNumToRender={15}
        scrollTo
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  city: {
    borderBottomColor: "rgb(235, 235, 235)",
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  search: {
    height: 53,
    backgroundColor: "white",
    elevation: 5,
  },
});

export default SelectCities;
