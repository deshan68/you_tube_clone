import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ShortCard from "./ShortCard";
import shortIcon from "../../assets/shortIcon.png";

const ShortSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleConatainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/shortIcon.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Shorts</Text>
      </View>
      <ShortCard />
    </View>
  );
};

export default ShortSection;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 380,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingLeft: 10,
    gap: 10,
  },
  titleConatainer: {
    width: "100%",
    gap: 5,
    flexDirection: "row",
    marginVertical: 10,
  },
  tinyLogo: {
    height: 20,
    width: 20,
  },
});
