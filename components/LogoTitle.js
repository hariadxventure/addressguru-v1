import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const LogoTitle = (props) => {
  const handlePress=()=>{
   props.navigation.navigate('Home')
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.logo}>
        <Image style={styles.img} source={require("../assets/logo.png")} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 160,
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    marginLeft: -17,
    marginRight: 3
  },
  img: {
    width: 130,
    // borderColor: 'black',
    // borderWidth: 1,
    resizeMode: "contain",
  },
});
export default LogoTitle;
