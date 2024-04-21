import React from "react";
import { StyleSheet } from "react-native";
import Card from "./Card";
import Features from "./Features";

const MeasurmentsFeatures = () => {
  return (
    <Features heading="What would you like to check?">
      <Card
        label="Heart rate"
        iconUri={require("../assets/heartIcon.png")}
        width={100}
      />
      <Card
        label="temperature"
        iconUri={require("../assets/temperatureIcon.png")}
        width={104}
      />
      <Card
        label="oxygen"
        iconUri={require("../assets/oxygenIcon.png")}
        width={100}
      />
    </Features>
  );
};

const styles = StyleSheet.create({});

export default MeasurmentsFeatures;
