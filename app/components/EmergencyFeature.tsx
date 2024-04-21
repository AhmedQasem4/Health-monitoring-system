import { Image, StyleSheet } from "react-native";
import React from "react";
import Features from "./Features";

const EmergencyFeature = () => {
  return (
    <Features heading="Emergency help needed?">
      <Image source={require("../assets/emergency.png")} style={{}} />
    </Features>
  );
};

const styles = StyleSheet.create({});

export default EmergencyFeature;
