import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CardListing = () => {
  return (
    <TouchableOpacity style={{elevation: 2}}>
    <View style={styles.wrapper}>
      <View style={[{height: '100%', width: '30%'}]}>
        <Image></Image>
      </View>
      <View>
        <View>
          <Text>Listing Name</Text>
        </View>
        <View>
          <Text>Listing Address</Text>
        </View>
        <View>
          <View>
            <View>
              <Text>Star</Text>
            </View>
            <View>
              <Text>number</Text>
            </View>
          </View>
          <View>
            <Text>AG Verified</Text>
          </View>
        </View>
        <View>
          <Button >
            <Text>Call Now</Text>
          </Button>
          <Button>
            <Text>View Details</Text>
          </Button>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    wrapper:{
        width: '98%',
        height: 250,
    }
})
export default CardListing;
