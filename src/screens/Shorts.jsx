import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import { Image } from "react-native";

const Shorts = () => {
  const image = {
    uri: "https://images.unsplash.com/photo-1679809532253-7a82ad0dd75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  };

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={image}
      resizeMode="cover"
    >
      <View style={styles.topIconContainer}>
        <Icon name="search" size={20} color="white" />
        <Icon name="camera" size={20} color="white" />
        <MaterialCommunityIcons name="dots-vertical" size={20} color="white" />
      </View>
      <View style={styles.leftMiddleIconCantainer}>
        <Foundation name="like" size={40} color="white" />
        <Foundation name="dislike" size={40} color="white" />
        <Foundation name="comment" size={40} color="white" />
        <Icon name="share" size={30} color="white" />
      </View>
      <View style={styles.bottomDescriptionContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Image
            style={{
              height: 40,
              width: 40,
              resizeMode: "cover",
              borderRadius: 40,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text style={{ color: "white" }}>@username</Text>
        </View>
        <Text style={{ fontSize: 18, color: "white" }}>
          One Reason you may struglle to learn ML/AI
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Shorts;

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  topIconContainer: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 40,
    paddingRight: 10,
    paddingTop: Platform.OS === "ios" ? 55 : 20,
  },
  leftMiddleIconCantainer: {
    height: "75%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 50,
    paddingRight: 10,
  },
  bottomDescriptionContainer: {
    height: "15%",
    paddingLeft: 10,
    gap: 10,
  },
});
