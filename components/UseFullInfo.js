import { View, Text } from "react-native";
import React from "react";
import { s } from "../styles/Global";

const UseFullInfo = () => {
  return (
    <View style={[s.bgColWh, s.pd5, { borderRadius: 5, paddingTop: 10 }]}>
      <Text style={[s.f22]}>useFull Information</Text>
      <View style={[s.pd5]}>
        <Text style={[s.pd5, s.f18, s.cgray]}>
          1. Avoid any scams while paying directly in advance
        </Text>
        <Text style={[s.pd5, s.f18, s.cgray]}>
          2. Make payment via Western Union etc at your own risk.
        </Text>
        <Text style={[s.pd5, s.f18, s.cgray]}>
          3. You can accept and make payments from outside the country at your
          own risk.
        </Text>
        <Text style={[s.pd5, s.f18, s.cgray]}>
          4. Address Guru is not responsible for any transation or payments,
          shipping guarantee, seller or buyer protections.
        </Text>
      </View>
    </View>
  );
};

export default UseFullInfo;
