import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";

const BluetoothConnection = () => {
    const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Signle2.jpg")} />
      <TouchableOpacity onPress={()=> navigation.navigate('BluetoothConnection')} style={styles.bluetoothButton}>
        <Text style={styles.text}>Bluetooth Connection</Text>
      </TouchableOpacity>
      <Image source={require("../assets/Signle.png")} />
    </View>
  );
};

export default BluetoothConnection;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bluetoothButton: {
    backgroundColor: "#35649A",
    flex: 1,
    padding: 10,
    borderRadius: 16,
    // marginLeft: 5,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    color: colors.white,
    textTransform: "uppercase",
  },
  icon: {},
});
