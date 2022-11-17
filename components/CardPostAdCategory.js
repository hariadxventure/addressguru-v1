import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { s } from "../styles/Global";
const { width, height } = Dimensions.get("window");

const CardPostAdCategory = (props) => {
  const { pWidth, iconName, bgCol, title, tagline } = props;
  return (
    <TouchableOpacity>
      <View style={[ s.container,styles.wrapper, {width: width*pWidth, backgroundColor: bgCol }]}>
        <Icon name={iconName} color="black" size={40} style={{margin: 5}}/>
        <Text style={{fontSize: 18}}>{title}</Text>
        <Text style={[{fontSize: 12, color: 'gray', textAlign: 'center'}]}>{tagline}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: (height - 160) / 3.2,
    margin: 6,
    flex: 1,
    elevation: 2,
    borderRadius: 10,
    padding: 5
  },
});

export default CardPostAdCategory;
