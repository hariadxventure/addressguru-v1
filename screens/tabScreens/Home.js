import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import CarouselMenu from '../../components/CarouselMenu'
import { dataMp1 } from '../../data/mp1Data';
import CardMP1 from '../../components/CardMP1';
import Ad1 from '../../components/Ad1';
import { s } from '../../styles/Global';
import Ad2 from '../../components/Ad2';
const Home = () => {
  
  return (
    <ScrollView>
      <View style={styles.marketPlace1}>
        <View style={styles.header}>
          <Text style={{fontSize: 18}}>Popular in Dehradun</Text>
          <Text style={{color: 'orange'}}>
            See all
            <Icon name="angle-right" size={20} color='orange' style={{ borderRadius: 50, padding: 5,marginLeft: 3, }}/>
          </Text>
        </View>
        <View style={styles.mp1Container}>
          {dataMp1.map(item=><CardMP1 key={item.id} {...item}/>)}
        </View>
      </View>
      <View style={styles.sec2}>
        <View style={styles.carouselBg}></View>
        <CarouselMenu/>
      </View>
      <View style={[s.container, s.pdt10, s.pdb10]}>
        <Ad1/>
      </View>
      <View style={[s.container, s.pdt10, s.pdb10]}>
        <Ad2/>
      </View>
      <View style={styles.sec5}>
        <Text>Ad 2</Text>
      </View>
      <View style={styles.sec6}>
        <Text>MarketPlace 2</Text>
      </View>
      <View>
        <View style={styles.sec4}>
        <Text>Ad 4</Text>

        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  mp1Container:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  marketPlace1:{
    padding: 10,
    paddingTop: 15,
    // backgroundColor: "pink",
  },
  header:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  sec2:{
    // backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    paddingBottom:12,
    paddingTop: 20
  },
  carouselBg:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300,
    backgroundColor: 'orange'
  },
  sec3:{
    backgroundColor: 'green',
    height: 500
  },
  sec4:{
    backgroundColor:'yellow',
    height: 200
  },
  sec5:{
    backgroundColor: 'blue',
    height: 400
  },
  sec6:{
    backgroundColor: 'gray',
    height: 500
  }
})

export default Home