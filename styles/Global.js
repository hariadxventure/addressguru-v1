import { StyleSheet, Dimensions } from "react-native";
// import { Colors } from "./Colors";
const {width, height} = Dimensions.get('window')

export const s = StyleSheet.create({
    br10:{
        borderRadius: 10
    },
    br20:{
        borderRadius: 20
    },
    br1b:{
        borderWidth: 1,
        borderColor:"black"
    },
    f28:{
        fontSize:28
    },
    f25:{
        fontSize:25
    },
    f22:{
        fontSize: 22
    },
    f21:{
        fontSize: 21
    },
    f20:{
        fontSize: 20
    },
    f15:{
        fontSize: 15
    },
    f16:{
        fontSize: 16
    },
    f17:{
        fontSize: 17
    },
    f18:{
        fontSize:18
    },
    f12:{
        fontSize:12
    },
    tc:{
        textAlign:'center'
    },
    cWh:{
        color: 'white'
    },
    cLightBlue: {
        color: '#2D6A9D'
    },
    bgColWh:{
        backgroundColor: "white"
    },
    bgColGrn:{
        backgroundColor: "green"
    },
    bgColOr:{
        backgroundColor: "orange"
    },
    bgColgry:{
        backgroundColor: "gray"
    },
    bgColYel:{
        backgroundColor: "yellow"
    },
    bgColLightRed:{
        backgroundColor: 'rgba(255, 0, 0, 0.1)'
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
    pd10:{
        padding: 10
    },
    pd12:{
        padding:12
    },
    pdl10:{
        paddingLeft: 10
    },
    pdl5:{
        paddingLeft: 5
    },
    pdb10:{
        paddingBottom: 10
    },
    pdb15:{
        paddingBottom: 15
    },
    pdt5:{
        paddingTop:5
    },
    pdt10:{
        paddingTop:10
    },
    pdt15:{
        paddingTop: 15
    },
    pdh5:{
        paddingHorizontal: 5
    },
    pdh7:{
        paddingHorizontal: 7
    },
    pdh10:{
        paddingHorizontal: 10
    },
    pdh20:{
        paddingHorizontal: 20
    },
    pdv5:{
        paddingVertical: 5
    },
    pdv10:{
        paddingVertical: 10
    },
    w100p:{
        width: '100%'
    },
    m10:{
        margin: 10
    },
    mh3: {
        marginHorizontal: 3
    },
    ml10:{
        marginLeft: 10
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    row:{
        flexDirection: "row"
    },
    sb: {
        justifyContent: 'space-between'
    },
    se: {
        justifyContent: 'space-evenly'
    },
    sa: {
        justifyContent: 'space-around'
    },
    alICenter: {
        alignItems: 'center'
    },
    wrp:{
        flexWrap: 'wrap'
    }
  });