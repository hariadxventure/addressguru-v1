import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { marketplaceCatData } from '../data/marketplaceCatData'
import SingleScrollMenu from './SingleScrollMenu'
import apiData from '../methods/getApi'
const ScrollMenu = ({url}) => {
  const [mpCat, setMpCat]= useState([])
  useEffect(()=>{
    async function getData() {
      const {data} = await apiData(url) 
      setMpCat(data)
      // console.log("dataApi= ",data)
    }
    getData()
  },[])

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <SingleScrollMenu title={"All"}/>
      {mpCat.map(item=><SingleScrollMenu key={item.id} title={item.name}/>)}
    </ScrollView>
  )
}

export default ScrollMenu