import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.p}>
            Address Guru is an online business directory where businesses of
            every category are listed and promoted. Address guru helps in
            getting locals as well as big businesses have an online presence and
            reach among the online audience. This is done through online posting
            of Ads on our website.
          </Text>
          <Text style={styles.p}>
            Address Guru makes sure you get the right and correct business
            information on our platform.
          </Text>
          <Text style={styles.p}>
            Maintaining authenticity between the sellers and buyers on our
            platform.
          </Text>
          <Text style={styles.p}>
            On Address Guru, sellers can advertise their business with banner
            ads and listing their businesses.
          </Text>
          <Text style={styles.p}>
            Addressguru is a bridge between the buyers looking for sellers and
            manufacturers of a product and addressguru helps them discover their
            preferred business easily in their area. For sellers, addressguru is
            providing a platform to display their business and get themselves in
            the eyes of the perspective buyers and get new clients and customers
            on board. This ultimately helps the businesses in their growth and
            popularity in both online and offline world.
          </Text>
          <Text style={styles.p}>
            With Address Guru, both buyers and sellers can easily interact with
            each other and do business. Address guru verifies the buyers and
            aims at listing only the correct information.
          </Text>
        </View>
        <View>
          <Text style={styles.h1}>Address Guru's mission</Text>
          <Text style={styles.p}>
            We aim at providing a single platform to all the sellers and buyers
            to discover and connect and conduct business easily and safely.
          </Text>
        </View>
        <View>
          <Text style={styles.h1}>Corporation background</Text>
          <Text style={[styles.ol, styles.p]}>
            1. The company commenced in 2019 offering local business directories
            and then reaching out at country level and then to international
            level.
          </Text>
          <Text style={[styles.ol, styles.p]}>
            2. The official addressguru website was launched in 2018.
          </Text>
          <Text style={[styles.ol, styles.p]}>
            3. Address Guru Search services provide a bridge to the businesses
            and its prospective buyers to discover and connect. It provides many
            opportunities to the businesses to market their business
            effectively.
          </Text>
        </View>
        <View>
          <Text style={styles.h1}>Key Highlights of Address Guru</Text>
          <Text style={[styles.h2, styles.ol]}>
            1. International presence - {""}
            <Text style={[styles.p]}>
              Address guru has an international presence from India to .
            </Text>
          </Text>
          <Text style={[styles.h2, styles.ol]}>
            2. Large community of users - {""}
            <Text style={[styles.p]}>
              Address Guru is having a very large user base of sellers.
            </Text>
          </Text>
          <Text style={[styles.h2, styles.ol]}>
            3. Local business reach - {""}
            <Text style={[styles.p]}>
              With specific reach for the local business we help the users to
              search for their relevant products easily in their local area.
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.h1}>Infringement Policy</Text>
          <Text style={styles.p}>
            All the trademark, logos, service names and other marks are property
            of address guru and the vendors.
          </Text>
          <Text style={styles.p}>
            Address Guru uses the marks and information of the vendors for the
            distribution of information. Address guru have no intention to
            falsely claim any property owned by the vendors.
          </Text>
          <Text style={styles.p}>
            The infringement policy of Address Guru states that all the property
            provided on the website are owned by the vendors and users providing
            information on the website which comply to the Address Guru rules of
            posting.
          </Text>
          <Text style={styles.p}>
            If you find any information is violating any intellectual property,
            then you can report the infringement at contact@addressguru.in
          </Text>
        </View>
        <View>
          <Text style={[styles.h1]}>How to report listing infringement.</Text>
          <Text style={[styles.ol, styles.p]}>
           1. Identification of the infringed property
          </Text>
          <Text style={[styles.ol, styles.p]}>
           2. Description of the information or material that has been infringed
          </Text>
          <Text style={[styles.ol, styles.p]}>3 .Your address, contact number and email</Text>
          <Text style={[styles.ol, styles.p]}>
            4. A written statement confirming that the information provided by you
            is correct and you hold the utmost right to the property and act as
            the rightful owner of the property.
          </Text>
          <Text style={[styles.ol, styles.p]}>
            5. Brand name (in case of Trademark infringement)
          </Text>
          <Text style={[styles.ol, styles.p]}>6. Details of the property infringed</Text>
          <Text style={[styles.ol, styles.p]}>
           7.  Documents for legal proceedings against the party infringing the
            property.
          </Text>
        </View>
        <View style={styles.bottom}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  bottom: {
    paddingBottom: 20,
  },
  h1: {
    fontSize: 23,
    paddingBottom:10,
    paddingTop:15,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    fontWeight: "700",
  },
  p: {
    fontWeight: "normal",
    paddingBottom: 15,
    paddingLeft:10,
    fontSize: 20,
    lineHeight: 28,
    color: "#616060"
  },
  ol: {
    padding: 2,
    paddingLeft: 10,
  },
});
export default About;
