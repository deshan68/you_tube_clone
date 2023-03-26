import { View, Text } from "react-native";
import React from "react";
import ShortCard from "./ShortCard";

const ShortSection = () => {
  return (
    <View>
      <Text>Shorts</Text>
      <ShortCard />
    </View>
  );
};

export default ShortSection;
