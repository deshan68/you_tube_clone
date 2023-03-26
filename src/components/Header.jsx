import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NotificationsCountBadge from "./NotificationsCountBadge";

export default function Header() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AntDesign name="youtube" color={"red"} size={30} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            fontFamily: "AmericanTypewriter-CondensedBold",
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <MaterialIcons name="connected-tv" color={"black"} size={25} />
        <View style={{ position: "relative", zIndex: 1 }}>
          <AntDesign name="bells" color={"black"} size={25}></AntDesign>
          <NotificationsCountBadge />
        </View>
        <AntDesign name="search1" color={"black"} size={25} />
        <AntDesign name="user" color={"black"} size={25} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
