import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NotificationsCountBadge = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: -10,
        backgroundColor: "red",
        paddingHorizontal: 5,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>1+</Text>
    </View>
  );
};

export default NotificationsCountBadge;

const styles = StyleSheet.create({});
