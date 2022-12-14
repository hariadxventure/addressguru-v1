import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiData from '../../methods/getApi'
import CardListing from '../../components/CardListing'
import { ScrollView } from 'react-native-gesture-handler'
import CommonHeader from '../../components/CommonHeader'
import { CityContext } from '../../context/CityContextProvider'
import { useContext } from 'react'
import { s } from '../../styles/Global'
const ListingsPage = (props) => {
  const {route} = props
  const [refreshing, setRefreshing] = useState(false)
  const [listingData, setListingData] = useState([])
  const {city} = useContext(CityContext)
  const getListingPageData = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData(`https://www.addressguru.in/api/search-listing?search=${route.params.catName}&city=${city}`)
      setRefreshing(false)
      setListingData(data)
    }
    getData()
  }
  useEffect(()=>{
    getListingPageData()
  },[city])

  return (
    <View >
      <CommonHeader isListing={true}/>
      {listingData.length==0 && !refreshing?(
        <View style={[ s.container, s.pdv10]}>
          {city=="Select City"?(
            <Text style={[s.f25, s.cgray]}>
            Plese select a city first
          </Text>
          ):(
            <Text style={[s.f25, s.cgray]}>
            No data found
          </Text>
          )}
        </View>
      ):(
      <FlatList
        data={listingData}
        renderItem={({item})=><CardListing {...props} {...item}/>}
        keyExtractor={item=>item.id}
        onRefresh={()=>getListingPageData()}
        refreshing={refreshing}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingBottom: 70,
          alignItems: 'center'
        }}
      />
      )}
    </View>
  )
}

export default ListingsPage