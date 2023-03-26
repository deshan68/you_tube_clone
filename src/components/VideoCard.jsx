import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const videoCardData = [
  {
    id: 1,
    name: "How Samsung phones are 'Faking' 120Hz",
    channel: "Unbox Therapy",
    views: "1.2M views",
    time: "2 days ago",
    coverUri:
      "https://plus.unsplash.com/premium_photo-1667516819655-55413f299fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    profileUri:
      "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "How Samsung phones are 'Faking' 120Hz",
    channel: "Unbox Therapy",
    views: "1.2M views",
    time: "2 days ago",
    coverUri:
      "https://images.unsplash.com/photo-1679641051119-c4ce08021f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    profileUri:
      "https://images.unsplash.com/photo-1679653257477-018dade86649?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "How Samsung phones are 'Faking' 120Hz",
    channel: "Unbox Therapy",
    views: "1.2M views",
    time: "2 days ago",
    coverUri:
      "https://images.unsplash.com/photo-1679612423147-bc5246818202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    profileUri:
      "https://images.unsplash.com/photo-1679706292806-3a7d5eb2dd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

const VideoCard = () => {
  return (
    <>
      {videoCardData.map((item) => (
        <View style={{ height: 280, marginBottom: 0 }} key={item.id}>
          <Image
            style={{ height: 220, width: "100%", resizeMode: "cover" }}
            source={{
              uri: item.coverUri,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              paddingTop: 5,
              paddingHorizontal: 10,
              justifyContent: "space-between",
              height: 280 - 220,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: "cover",
                  borderRadius: 50,
                }}
                source={{
                  uri: item.profileUri,
                }}
              />
              <View>
                <View>
                  <Text style={{ color: "black" }}>
                    How Samsung phones are "Faking"
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "gray" }}>Samsung . </Text>
                  <Text style={{ color: "gray" }}>1.5M views . </Text>
                  <Text style={{ color: "gray" }}>2 days ago</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                paddingTop: 5,
              }}
            >
              <Icon name="ellipsis-v" color={"gray"} size={20} />
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default VideoCard;

const styles = StyleSheet.create({});
