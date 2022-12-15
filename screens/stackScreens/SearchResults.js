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

const SearchResults = (props) => {
  const {route} = props
  const [searchData, setSearchData] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const {city} = useContext(CityContext)
  const getSearchData = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData('https://www.addressguru.in/api/marketplace/search?query='+route.params.searchVal+'&city='+city)
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
      <CardProduct {...item} {...props}/>
    )
  })
  return (
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

export default SearchResults