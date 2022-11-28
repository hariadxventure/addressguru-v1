import { View, Text, Button } from 'react-native'
import React from 'react'
import Ad2 from './Ad2'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import { s } from '../styles/Global'

const LandingPageMp = () => {
  return (
    <View>
      <Ad2/>
      <View>
        <Text>Name</Text>
        <Text>Address</Text>
      </View>
      <Ad2/>
      <View>
        <Text>Posted Date: 17 oct, 2020</Text>
      </View>
      <View>
        <View>
          <Icon name='tag' size={20}/>
          <Text>Mobile cat</Text>
        </View>
        <View>
          <Icon name='tag' size={20}/>
          <Text>Moblie subcat</Text>
        </View>
        <View>
          <Icon name='map-market' size={20}/>
          <Text>Dehradun</Text>
        </View>
      </View>
      <View>
        <View>
          <Icon name='phone' size={20}/>
          <Text>Call</Text>
        </View>
        <View>
          <Icon name='whatsapp' size={20}/>
          <Text>Chat</Text>
        </View>
        <View>
          <Icon name='internet-explorer' size={20}/>
          <Text>Visit Website</Text>
        </View>
      </View>
      <View>
        <Text>share on</Text>
        <View>
          <View>
            <Icon name='whatsapp' size={20} style={{margin:10}}/>
            <Icon name='whatsapp' size={20} style={{margin:10}}/>
            <Icon name='whatsapp' size={20} style={{margin:10}}/>
          </View>
        </View>
      </View>
      <View>
        <View>
          <Icon name='times-rectangle' size={20}/>
          <Text>Report</Text>
        </View>
        <View>
          <Text>Ad Id: 34234234</Text>
        </View>
      </View>
      <View>
        <Text>About us</Text>
        <View>
          <Text>I Create Intuitive, Human-Centric, And Elegant UI/UX Design Solutions that improves customer satisfaction, user interaction, as well as boost your business grow and enhance. I prefer Figma, pen & papper</Text>
        </View>
        <View>
          <View>
            <View>
              <Text style={[s.f22]}>State</Text>
            </View>
            <View>
              <Text style={[s.f15]}>Uttarakhand</Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={[s.f22]}>District</Text>
            </View>
            <View>
              <Text style={[s.f15]}>Dehradun</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text>Map</Text>
      </View>
      <View>
        <View>
          <Text>OverView - mi note 4 forsael (in good condition)</Text>
        </View>
        <View>
          <Text>
          You should call this method in rare circumstances only, such as when a new version of the app removes support for all types of remote notifications. Users can temporarily prevent apps from receiving remote notifications through the Notifications section of the Settings app. Apps unregistered through this method can always re-register.
          </Text>
        </View>
      </View>
      <View>
        <Text>Send Enquiry</Text>
      </View>
      <View>
        <Text>useFull Information</Text>
        <View>
          <Text>avoid any scams while paying directly in advance</Text>
          <Text>avoid any scams while paying directly in advance</Text>
          <Text>avoid any scams while paying directly in advance</Text>
          <Text>avoid any scams while paying directly in advance</Text>
          <Text>avoid any scams while paying directly in advance</Text>
          <Text>avoid any scams while paying directly in advance</Text>
        </View>
      </View>
    </View>
  )
}

export default LandingPageMp