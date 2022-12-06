import { View, Text } from "react-native";
import React from "react";
import FacilitySingle from "./FacilitySingle";
import { s } from "../styles/Global";

const ListFacilities = ({data, subData, name, type}) => {
  
  return (
    <>
      {data[subData] && (data[subData][0] !=null && data[subData][0].length != 0) ? (
        <View>
          <View style={[s.pdv5, { borderBottomWidth: 1, borderColor: "gray" }]}>
            <Text style={[s.f18]}>{name}</Text>
          </View>
          <View>
            <View>
              <Text>{data.business_name} provides below {name}</Text>
            </View>
            <View style={[s.row, s.wrp, s.pdv10]}>
              {data[subData].map((el, idx) => (
                <FacilitySingle key={idx} text={el} />
              ))}
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ListFacilities;
