import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const SecHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <TouchableOpacity>
        <Text style={{ color: "orange" }}>
          See all
          <Icon
            name="angle-right"
            size={20}
            color="orange"
            style={{ borderRadius: 50, padding: 5, marginLeft: 3 }}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});

export default SecHeader;
