import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { s } from '../../styles/Global'
import { daysData } from '../../data/daysData'
import FilterCard from '../../components/filterScreen/FilterCard'
import { jobsCategory } from '../../data/jobsCategory'
import apiData from '../../methods/getApi'

const FilterScren = ({closeSheet, menuUrl}) => {
  const [loading, setLoading] = useState(false)
  const [cat, setCat]= useState([])
  useEffect(()=>{
    async function getData() {
      setLoading(true)
      const {data} = await apiData(menuUrl) 
      setLoading(false)
      setCat(data)
      // console.log("dataApi= ",data)
    }
    getData()
  },[])
  return (
    <View style={[styles.container, {height: '100%'}]}>
      <View style={[s.sb, s.row, s.pdh5]}>
        <View style={[s.container, s.row]}>
          <Icon name='filter' size={15} color="gray"/>
          <Text style={[s.cgray, s.f18, s.pdh5 ]}>Filters</Text>
        </View>
        <TouchableOpacity onPress={closeSheet}>
          <Text style={[ s.pd5]}>
            <Icon name='times' size={22} color="gray"/>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[s.pdh5 ,{paddingBottom: 65}]}>
        <ScrollView style={[]}>
          <View style={[s.pd5, s.row, s.wrp]}>
            {
              daysData.map(item=><FilterCard key={item.id} title={item.title}/>)
            }
          </View>
          <View style={[{paddingTop: 10}]}>
            <Text style={[s.f18, s.cgray]}>Sort by Price</Text>
            <View style={[s.pd5, s.row, s.wrp]}>
              <FilterCard title={"low to high"}/>
              <FilterCard title={"high to low"}/>
            </View>
          </View>
          <View style={[{paddingTop: 10}]}>
            <Text style={[s.f18, s.cgray]}>Sort by Category</Text>
            <View style={[s.pd5, s.row, s.wrp]}>
              {loading?(<View style={[s.container, {height: 100, width: '100%'}]}>
                <ActivityIndicator/>                
              </View>):(
                cat.map(item=><FilterCard key={item.id} title={item.name} />))
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    // backgroundColor: 'gray'
  }
})

export default FilterScren