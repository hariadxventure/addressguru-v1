// not im use


// import { View, Text, StyleSheet, Image } from 'react-native'
// import React from 'react'
// import { s } from '../styles/Global'

// const CardJobs = ({images,title,company_name, city, state, salary_from, salary_to, type }) => {
//   return (
//     <View style={[styles.container, s.row]}>
//       <View style={[styles.imgWrapper]}>
//         <Image style={[styles.img]} source={{uri: "https://www.addressguru.in/images/"+images[0]}}/>
//       </View>
//       <View style={[s.sb,{width: "68%"}]}>
//         <View style={[]}><Text style={[s.f15,{color: "#2D6A9D", fontWeight: '500'}]}>{title}</Text></View>
//         <View><Text style={[{}]}>{company_name}</Text></View>
//         <View><Text>{city},{" "}{state}</Text></View>
//         <View style={[s.row, s.sb,{paddingRight: 5}]}>
//           <View>
//             <View>
//               <Text style={[s.fwb, s.tc,{}]}>Job Type</Text>
//             </View>
//             <View>
//               <Text>{type}</Text>
//             </View>
//           </View>
//           <View>
//             <View>
//               <Text style={[s.fwb, s.tc]}>Salary</Text>
//             </View>
//             <View>
//               <Text>{salary_from}-{salary_to}</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     width: "98%",
//     height: 150,
//     backgroundColor: "white",
//     marginVertical: 5,
//     elevation: 1,
//     borderRadius: 5,
//     padding: 5
//   },
//   imgWrapper:{
//     width: "30%",
//     // height: 140,
//     marginRight: 6
//   },
//   img:{
//     height: "100%",
//     width: '100%',
//     borderRadius: 5,
//     resizeMode: 'contain'
//   }
// })

// export default CardJobs