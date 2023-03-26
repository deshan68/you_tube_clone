import { View, Text } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";
import ShortSection from "./ShortSection";

const HomeContent = () => {
  return (
    <View>
      <VideoCard />
      <ShortSection />
    </View>
  );
};

export default HomeContent;
