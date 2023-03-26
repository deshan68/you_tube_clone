import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import ShortModal from "./ShortModal";

const shortData = [
  {
    id: 1,
    name: "Ultimate egg sandwith",
    views: "10M views",
    imgUri:
      "https://images.unsplash.com/photo-1679809532253-7a82ad0dd75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Ymaha R1 vs Honda SP 1000",
    views: "10M views",
    imgUri:
      "https://images.unsplash.com/photo-1679756418555-660318ca5fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Mitshubishi Lancer Evo 10",
    views: "10M views",
    imgUri:
      "https://images.unsplash.com/photo-1679760588352-a12fa6ebe16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const ShortCard = () => {
  const [shortModalVisible, setShortModalVisible] = useState(false);
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical={false}
      >
        <View style={styles.container}>
          {shortData.map((item) => (
            <Pressable
              onLongPress={() => setShortModalVisible(!shortModalVisible)}
              delayLongPress={300}
            >
              <ImageBackground
                imageStyle={{ borderRadius: 10 }}
                style={styles.imageContainer}
                source={{
                  uri: item.imgUri,
                }}
              >
                <TouchableOpacity
                  onPress={() => setShortModalVisible(!shortModalVisible)}
                  style={{
                    width: "100%",
                    padding: 10,
                    alignItems: "flex-end",
                  }}
                >
                  <Icon name="ellipsis-v" color={"white"} size={15} />
                  <ShortModal
                    shortModalVisible={shortModalVisible}
                    setShortModalVisible={setShortModalVisible}
                  />
                </TouchableOpacity>
                <LinearGradient
                  colors={["transparent", "#000"]}
                  style={{
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                    gap: 3,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={styles.imgDescriptionText}>{item.name}</Text>
                  <Text style={styles.imgDescriptionText}>{item.views}</Text>
                </LinearGradient>
              </ImageBackground>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ShortCard;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
  imageContainer: {
    height: 305,
    width: 180,
    resizeMode: "cover",
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  imgDescriptionText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
  },
});
