import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const ShortModal = ({ shortModalVisible, setShortModalVisible }) => {
  const modalItemData = [
    {
      id: 1,
      name: "Report",
      icon: "flag-o",
    },
    {
      id: 2,
      name: "Save",
      icon: "bookmark-o",
    },
    {
      id: 3,
      name: "Share",
      icon: "share-alt",
    },
  ];
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={shortModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {modalItemData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.modalItem}
                onPress={() => setShortModalVisible(!shortModalVisible)}
              >
                <Icon name={item.icon} size={20} color="black" />
                <Text style={styles.textStyle}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShortModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    margin: 30,
    width: "97%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "red",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
  modalItem: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 25,
    marginVertical: 13,
  },
});
