import { View, Text, ScrollView } from "react-native";
import React from "react";
import VideoCard from "./VideoCard";
import ShortSection from "./ShortSection";
import VideoPlayer from "./VideoPlayer";

const HomeContent = () => {
  return (
    <ScrollView style={{ flex: 1, width: "100%" }}>
      {/* <VideoPlayer /> */}
      <ShortSection />
      <VideoCard />
    </ScrollView>
  );
};

export default HomeContent;
