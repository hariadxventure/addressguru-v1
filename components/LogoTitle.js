import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const LogoTitle = () => {
  return (
    <View style={styles.logo}>
      <Image style={styles.img} source={require("../assets/logo.png")} />
    </View>
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
