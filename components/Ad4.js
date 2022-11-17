import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const Ad4 = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground>
        <View style={[s.mla, s.pd5, {width: '60%'}]}>
          <View>
            <Text style={styles.text}>JOBS IN</Text>
            <Text style={styles.text}>DEHRADUN</Text>
          </View>
          <View style={[s.bgColWh, s.br20, s.m10]}>
            <Text style={[s.tc,s.f20, s.pd5]}>VIEW JOBS</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
  wrapper: {
    height: 200,
    width: "95%",
    backgroundColor: "orange",
    justifyContent:"center"
  },
});

export default Ad4;
