import { View, Text } from 'react-native'
import  Icon from "react-native-vector-icons/FontAwesome";
import React, { useEffect } from 'react'

const PrintStars = ({fdigit, ldigit}) => {
  
  return (
    <>
    {
      fdigit==0?(
        <>
        {ldigit!=0?(
          <Icon name='star-half-o' size={15} color="gold"/>
          ):(
          <Icon name='star-o' size={15} color="gold"/>
        )}
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        </>
      ):fdigit==1?(
        <>
        <Icon name='star' size={15} color="gold"/>
        {ldigit!=0?(
          <Icon name='star-half-o' size={15} color="gold"/>
          ):(
          <Icon name='star-o' size={15} color="gold"/>
        )}
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        </>
      ):fdigit==2?(
        <>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        {ldigit!=0?(
          <Icon name='star-half-o' size={15} color="gold"/>
          ):(
          <Icon name='star-o' size={15} color="gold"/>
        )}
        <Icon name='star-o' size={15} color="gold"/>
        <Icon name='star-o' size={15} color="gold"/>
        </>
      ):fdigit==3?(
        <>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        {ldigit!=0?(
          <Icon name='star-half-o' size={15} color="gold"/>
          ):(
          <Icon name='star-o' size={15} color="gold"/>
        )}
        <Icon name='star-o' size={15} color="gold"/>
        </>
      ):fdigit==4?(
        <>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        {ldigit!=0?(
          <Icon name='star-half-o' size={15} color="gold"/>
          ):(
          <Icon name='star-o' size={15} color="gold"/>
        )}
        </>
      ):(
        <>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        <Icon name='star' size={15} color="gold"/>
        </>
      )
    }
    </>
  )
}

export default PrintStars