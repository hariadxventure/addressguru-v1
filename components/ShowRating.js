import { View, Text } from 'react-native'
import React from 'react'
import PrintStars from './PrintStars'
import { s } from '../styles/Global'
import { useState } from 'react'
import { useEffect } from 'react'

const ShowRating = ({ratings, style}) => {
  let [avgRating, setAvgRating] = useState(0);
  let [fdigit, setFdigit] = useState(0);
  let [ldigit, setLdigit] = useState(0);

  const calcRating = () => {
    let totalStars = 0;
    if (ratings?.length == 0) {
      setAvgRating(0);
    } else {
      ratings?.forEach((el) => {
        totalStars += parseInt(el.rating);
      });
      setAvgRating(totalStars / ratings?.length);
    }
  };

  useEffect(() => {
    calcRating();
    setFdigit((prev) => parseInt(avgRating.toPrecision(2).split(".")[0]));
    setLdigit((prev) => parseInt(avgRating.toPrecision(2).split(".")[1]));
  }, [fdigit, ldigit, avgRating]);
  return (
    <View style={[s.row,{ ...style}]}>
    <View style={[]}>
      <Text style={[s.cgray, { fontSize: 12 }]}>
        {avgRating.toFixed(1)}
      </Text>
    </View>
    <View style={[s.row, s.pdl5]}>
      <PrintStars fdigit={fdigit} ldigit={ldigit} />
    </View>
    <View
      style={[s.pdh7, { borderRadius: 5, marginLeft: 0, height: 16 }]}
    >
      <Text style={[s.cgray, { fontSize: 12 }]}>
        {ratings?.length}{" "}
        {ratings?.length == 1 || ratings?.length == 0
          ? "Review"
          : "Reviews"}
      </Text>
    </View>
  </View>
  )
}

export default ShowRating