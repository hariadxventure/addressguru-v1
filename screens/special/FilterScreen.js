import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { s } from "../../styles/Global";
import { daysData } from "../../data/daysData";
import FilterCard from "../../components/filterScreen/FilterCard";
import { jobsCategory } from "../../data/jobsCategory";
import apiData from "../../methods/getApi";

const FilterScreen = ({
  closeSheet,
  menuUrl,
  setSortOrder,
  setActiveCat,
  categories,
  activeCat,
  sortOrder,
  screenName
}) => {
  return (
    <View style={[styles.container, { height: "100%" }]}>
      <View style={[s.sb, s.row, s.pdh5]}>
        <View style={[s.container, s.row]}>
          <Icon name="filter" size={15} color="gray" />
          <Text style={[s.cgray, s.f18, s.pdh5]}>Filters</Text>
        </View>
        <TouchableOpacity onPress={closeSheet}>
          <Text style={[s.pd5]}>
            <Icon name="times" size={22} color="gray" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[s.pdh5, { paddingBottom: 65 }]}>
        <ScrollView style={[]}>
          <View style={[s.pd5, s.row, s.wrp]}>
            {daysData.map((item) => (
              <FilterCard
                key={item.id}
                title={item.title}
                isTime={true}
                closeSheet={closeSheet}
                isCat={false}
                screenName={screenName}
              />
            ))}
          </View>
          <View style={[{ paddingTop: 10 }]}>
            
              {screenName=="MarketPlace"?(
                <Text style={[s.f18, s.cgray]}>
                  Sort by Price
                </Text>
              ):screenName=="Jobs"?(
                <Text style={[s.f18, s.cgray]}>
                  Sort by Salary
                </Text>
              ):(
                <Text style={[s.f18, s.cgray]}>
                  Sort by just like that
                </Text>
              )}
            <View style={[s.pd5, s.row, s.wrp]}>
              <FilterCard
                title={"low to high"}
                id= "ASC"
                setSortOrder={setSortOrder}
                closeSheet={closeSheet}
                isSort={true}
                isCat={false}
                sortOrder= {sortOrder}
                screenName={screenName}
                />
              <FilterCard
                title={"high to low"}
                id="DESC"
                setSortOrder={setSortOrder}
                closeSheet={closeSheet}
                isCat={false}
                isSort={true}
                sortOrder= {sortOrder}
                screenName={screenName}
              />
            </View>
          </View>
          <View style={[{ paddingTop: 10 }]}>
            <Text style={[s.f18, s.cgray]}>Filter by Category</Text>
            <View style={[s.pd5, s.row, s.wrp]}>
              <FilterCard
                title={"All"}
                id="All"
                setActiveCat={setActiveCat}
                closeSheet={closeSheet}
                isCat={true}
                activeCat={activeCat}
                screenName={screenName}
              />
              {categories.map((item) => (
                <FilterCard
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  setActiveCat={setActiveCat}
                  closeSheet={closeSheet}
                  isCat={true}
                  activeCat={activeCat}
                  screenName={screenName}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    // backgroundColor: 'gray'
  },
});

export default FilterScreen;
