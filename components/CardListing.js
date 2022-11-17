import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";

const CardListing = () => {
  return (
    <View style={styles.wrapper}>
      <View>
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
  );
};

const styles = StyleSheet.create({
    wrapper:{
        width: '95%',
        height: 250
    }
})
export default CardListing;
