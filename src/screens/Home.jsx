import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import TopNavigation from "../components/TopNavigation";
import VideoCard from "../components/VideoCard";
import HomeContent from "../components/HomeContent";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TopNavigation />
      <HomeContent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
