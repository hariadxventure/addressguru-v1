import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";

const Sidebar = ({ ...props }) => {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    photo: "",
    name: "Guest",
  });
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Icon name="x" size={25} style={styles.cut} />
      </TouchableOpacity>
      <View style={styles.sidebar}>
        <View style={{ marginLeft: 5 }}>
          <Image
            source={{ uri: "https://www.addressguru.in/images/user.png" }}
            style={styles.img}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>{userInfo.name}</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  cut: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingTop: 2,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "black",
  },
  text: {
    fontSize: 30,
    color: "black",
  },
});

export default Sidebar;
