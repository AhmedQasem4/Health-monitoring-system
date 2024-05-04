import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";

const NavigationBar = () => {
  const [selectedScreen, setSelectedScreen] = useState("");
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="home"
          size={25}
          style={{
            color: colors.lightGray,
            backgroundColor:
              selectedScreen === "Home" ? colors.lightGreen : "#fff",
          }}
          onPress={() => {
            // setSelectedScreen("Home");
            navigation.navigate("Home");
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="clock"
          size={25}
          style={{
            color: colors.lightGray,
            backgroundColor:
              selectedScreen === "MedicineAlarm" ? colors.lightGreen : "#fff",
          }}
          onPress={() => {
            // setSelectedScreen("MedicineAlarm");
            navigation.navigate("MedicineAlarm");
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="home-analytics"
          size={25}
          style={{
            color: colors.lightGray,
            backgroundColor:
              selectedScreen === "Reports" ? colors.lightGreen : "#fff",
          }}
          onPress={() => {
            // setSelectedScreen("Reports");
            // navigation.navigate("Reports");
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <MaterialCommunityIcons
          name="account"
          size={25}
          style={{
            color: colors.lightGray,
            backgroundColor:
              selectedScreen === "EditProfile" ? colors.lightGreen : "#fff",
          }}
          onPress={() => {
            // setSelectedScreen("EditProfile");
            navigation.navigate("EditProfile");
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    zIndex: 1,
    backgroundColor: colors.white,
  },
});

export default NavigationBar;
