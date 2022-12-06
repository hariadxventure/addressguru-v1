import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { s } from "../styles/Global";

const ShareSec = () => {

  return (
    <View style={[s.container, { marginTop: 35 }]}>
      <View style={[styles.wrapper]}>
        <Text style={[s.f18, s.cgray,styles.shareText]}>Share on</Text>
        <View style={[s.row]}>
          <TouchableOpacity>
            <Icon5
              name="whatsapp-square"
              size={30}
              color="#25d366"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon5
              name="facebook-square"
              size={30}
              color="#3b5998"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon5
              name="linkedin"
              size={30}
              color="#0a66c2"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon5
              name="twitter-square"
              size={30}
              color="#55acee"
              style={{ margin: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "98%",
    elevation: 1,
    margin: 5,
    backgroundColor: "#FDFDFD",
  },
  shareText:{
    position: "absolute",
    backgroundColor: "white",
    padding: 3,
    top: -17,
    left: 10,
  }
});
export default ShareSec;
