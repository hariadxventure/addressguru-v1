import { ScrollView, Text, View } from "react-native";
import React, { Component } from "react";

export class PostingRules extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>
            Listing items that are illegal to buy, own, import or sell in the
            country of your residence.
          </Text>
          <Text>Listing your business not being located in India</Text>
          <Text>Listing Ad in other language than English</Text>
          <Text>Listing incomplete Ad</Text>
          <Text>
            Listing Ad which is discriminatory as per
            caste/religion/nationality.
          </Text>
          <Text>Listing multiple Ads with different accounts/mail Id</Text>
          <Text>Listing any type of Adult content/Ad</Text>
          <Text>Listing Ad regarding any political view that may offend</Text>
          <Text>Listing Ad containing any kind of misleading information.</Text>
          <Text>Listing Ad with hateful information or remarks</Text>
        </View>
      </ScrollView>
    );
  }
}

export default PostingRules;
