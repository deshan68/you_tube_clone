import { View, Text, StyleSheet, ScrollView } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import React from "react";

topNavData = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Music",
  },
  {
    id: 3,
    name: "Gaming",
  },
  {
    id: 4,
    name: "Sports",
  },
  {
    id: 5,
    name: "News",
  },
  {
    id: 6,
    name: "Movies",
  },
];

const TopNavigation = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "black",
            paddingHorizontal: 12,
            paddingVertical: 5,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Entypo name="compass" size={18} color="white" />
        </View>
        {topNavData.map((item) => (
          <View
            key={item.id}
            horizontal={true}
            style={{
              backgroundColor: "black",
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "white" }}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopNavigation;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    gap: 10,
  },
});
