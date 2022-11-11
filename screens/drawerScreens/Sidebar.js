import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const Sidebar = ({...props}) => {
    const [userInfo, setUserInfo] = useState({
        id: 1,
        photo: '',
        name: 'Guest'
    })
  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.sidebar}>
            <View style={{marginLeft: 5}}>
                 <Image source={{uri: 'https://www.addressguru.in/images/user.png'}} style={{width: 80, height: 80, borderRadius: 40}}/>
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={styles.text}>{userInfo.name}</Text>
            </View>
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    sidebar:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10
    },
    text:{
        fontSize: 30
    }
})

export default Sidebar