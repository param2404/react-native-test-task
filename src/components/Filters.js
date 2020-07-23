import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { styling } from "../style";

export default function Filters(props) {
  const {state, getMonthly, getToday, getYearlyData} = props
  return(
    <View style={styling.titleContainer}>
      <View style={styling.tabs}>
        <TouchableOpacity onPress={getToday}>
          <Text
            style={{
              color: state.active === "Today" ? "pink" : "black",
            }}
          >
            Today
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styling.tabs}>
        <TouchableOpacity onPress={getMonthly}>
          <Text
            style={{
              color:
                state.active === "Monthly" ? "pink" : "black",
            }}
          >
            Monthly
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styling.tabs}>
        <TouchableOpacity onPress={getYearlyData}>
          <Text
            style={{
              color:
                state.active === "Yearly" ? "pink" : "black",
            }}
          >
            Yearly
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
