import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get("window");


const CardMP1 = (props) => {
    const {imgSrc, title, count, color} = props
  return (
    <TouchableOpacity>
        <View style={[styles.item, {backgroundColor: color}]}>
            <Image style={styles.img} source={imgSrc}/>
            <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 13}}>{title}</Text>
            <Text style={{textAlign: 'center', color: 'gray'}}>{count}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    item:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        // borderWidth: 1,
        // borderColor: 'black',
        height:125,
        width:width/4.7,
        margin: 4,
        marginBottom: 8,
        // padding:5
    },
    img:{
        height:width/6,
        width:width/6
    }
})

export default CardMP1