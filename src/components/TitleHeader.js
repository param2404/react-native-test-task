import React from "react";
import {View, Text} from "react-native";

export default function TitleHeader(props) {
  const {btcusd} = props;
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Text>Bit Coin USD </Text>
      </View>
      <View>
        <Text>{btcusd}</Text>
      </View>
    </View>
  )
}

