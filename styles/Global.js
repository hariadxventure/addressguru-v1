import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')


export const s = StyleSheet.create({
    br20:{
        borderRadius: 20
    },
    f28:{
        fontSize:28
    },
    f22:{
        fontSize: 22
    },
    f20:{
        fontSize: 20
    },
    f15:{
        fontSize: 15
    },
    f18:{
        fontSize:18
    },
    tc:{
        textAlign:'center'
    },
    cWh:{
        color: 'white'
    },
    bgColWh:{
        backgroundColor: "white"
    },
    bgColOr:{
        backgroundColor: "orange"
    },
    fwb:{
        fontWeight: 'bold'
    },
    fw400:{
        fontWeight: '400'
    },
    fw500:{
        fontWeight: '500'
    },
    fwn:{
        fontWeight: 'normal'
    },
    pd5:{
        padding: 5,
    },
    pd12:{
        padding:12
    },
    pdl10:{
        paddingLeft: 10
    },
    pdl10:{
        paddingLeft: 10
    },
    pdb10:{
        paddingBottom: 10
    },
    pdb15:{
        paddingBottom: 15
    },
    pdt10:{
        paddingTop:10
    },
    pdt15:{
        paddingTop: 15
    },
    m10:{
        margin: 10
    },
    mla:{
        marginLeft: 'auto'
    },
    bottom: {
      paddingBottom: 20,
    },
    h1: {
      fontSize: 23,
      paddingBottom:10,
      paddingTop:15,
      fontWeight: "bold",
      color: "#616060"
    },
    h2: {
      fontSize: 20,
      fontWeight: "700",
      color: "#616060"
    },
    cgray:{
        color: "#616060"
    },
    lh28:{
        lineHeight: 28
    },
    p: {
      fontWeight: "normal",
      paddingBottom: 15,
      paddingLeft:10,
      fontSize: 20,
      lineHeight: 28,
      color: "#616060"
    },
    ol: {
      padding: 2,
      paddingLeft: 10,
      color: "#616060"
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row:{
        display: 'flex',
        flexDirection: "row"
    }
  });