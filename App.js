import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "./src/screens/Home";
import Shorts from "./src/screens/Shorts";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Shorts />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6e5",
    alignItems: "center",
    justifyContent: "center",
  },
});
