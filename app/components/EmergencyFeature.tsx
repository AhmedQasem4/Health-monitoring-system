import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Features from "./Features";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";
const EmergencyFeature = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <Features heading="Emergency help needed?">
      <TouchableOpacity onPress={()=> navigation.navigate("Emergency")}>
      <Image source={require("../assets/emergency.png")}/>
      </TouchableOpacity>
    </Features>
  );
};

const styles = StyleSheet.create({});

export default EmergencyFeature;
