import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { s } from "../styles/Global";

const ListPayment = ({data, subData}) => {
  return (
    <>
      {data.payment ? (
        <View>
          <View style={[s.pdv5, { borderBottomWidth: 1, borderColor: "gray" }]}>
            <Text style={[s.f18]}>Payment Mode</Text>
          </View>
          <View>
            <View>
              <Text>{data.business_name} acceptable payment modes</Text>
            </View>
            <View style={[s.wrp, s.pdv10]}>
              {data.payment.map((el, idx) => (
                <View key={idx} style={[s.row, s.pd5, s.alICenter]}>
                  <Icon name="circle" size={12} color="black" />
                  <Text style={[s.pdl5]}>{el}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ListPayment;
