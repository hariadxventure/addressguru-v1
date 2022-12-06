import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiData from '../../methods/getApi'
import CardListing from '../../components/CardListing'
import { ScrollView } from 'react-native-gesture-handler'
import CommonHeader from '../../components/CommonHeader'

const ListingsPage = (props) => {
  const {route} = props
  const [refreshing, setRefreshing] = useState(false)
  const [listingData, setListingData] = useState([])

  const getListingPageData = ()=>{
    async function getData(){
      setRefreshing(true)
      const {data} = await apiData(`https://www.addressguru.in/api/search-listing?search=${route.params.catName}&city=${route.params.city}`)
      setRefreshing(false)
      setListingData(data)
    }
    getData()
  }
  useEffect(()=>{
    getListingPageData()
  },[])

  return (
    <View >
      {/* <ScrollView>
      <Image
        style={{ width: "100%", resizeMode: "contain" }}
        source={require("../../assets/others/AdMarketPlace.jpg")}
       />
      </ScrollView> */}
      <CommonHeader isListing={true}/>
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
    </View>
  )
}

export default ListingsPage