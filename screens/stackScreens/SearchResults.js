import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { s } from '../../styles/Global'
import { useEffect } from 'react'
import { CityContext } from '../../context/CityContextProvider'
import { useContext } from 'react'
import apiData from '../../methods/getApi'
import { useState } from 'react'
import { useCallback } from 'react'
import CardProduct from '../../components/CardProduct'
import CardJobsNew from '../../components/CardJobsNew'

const SearchResults = (props) => {
  const {route} = props
  let screenName = route.params.screenName
  const [searchData, setSearchData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const {city} = useContext(CityContext)
  const getSearchData = ()=>{
    async function getData(){
      setRefreshing(true)
      let url
      if(screenName == "MarketPlace"){
        url = 'https://www.addressguru.in/api/marketplace/search?query='
      }else if(screenName == "Jobs"){
        url = 'https://www.addressguru.in/api/job/search?query='
      }else if(screenName == "Home"){
        url = ""
      }else if(screenName == "ToLet"){
        url = ""
      }
      const {data} = await apiData(url+route.params.searchVal+'&city='+city)
      setRefreshing(false)
      setSearchData(data)
    }
    getData()
  }
  useEffect(()=>{
    getSearchData()
  },[city])

  const renderItem = useCallback(({item,index})=>{
    return(
      <>
      {screenName== "MarketPlace"?(
        <CardProduct {...item} {...props}/>
      ): screenName == "Jobs"?(
        <CardJobsNew {...item} {...props}/>
      ):(
        null
      )}
      </>
    )
  })
  return (
    <>
    {
      searchData?.length==0 && !refreshing?(
        <View style={[s.pdv10, s.container]}>
          <Text style={[s.f25, s.cgray, s.pdv10]}>
            No results to show
          </Text>
        </View>
        ):(
          
          <View style={[s.container,{flex: 1}]}>
          <FlatList
            data={searchData}
            renderItem= {renderItem}
            keyExtractor={(item, index)=>index}
            onRefresh={()=>getSearchData()}
            refreshing={refreshing}
            contentContainerStyle={[s.pd5]}
            columnWrapperStyle={[s.sb]}
            numColumns={2}
            />
        </View>
      )
    }
    </>
  )
}

export default SearchResults