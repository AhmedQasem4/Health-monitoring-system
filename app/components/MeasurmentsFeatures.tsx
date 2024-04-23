import React from "react";
import { StyleSheet } from "react-native";
import Card from "./Card";
import Features from "./Features";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";
const MeasurmentsFeatures = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <Features heading="What would you like to check?">
      <Card
        label="Heart rate"
        iconUri={require("../assets/heartIcon.png")}
        width={100}
        onPress={()=>navigation.navigate('HeartRate')}
      />
      <Card
        label="temperature"
        iconUri={require("../assets/temperatureIcon.png")}
        width={104}
        onPress={()=>navigation.navigate('Temperature')}
      />
      <Card
        label="oxygen"
        iconUri={require("../assets/oxygenIcon.png")}
        width={100}
        onPress={()=> navigation.navigate('Oxygen')}
      />
    </Features>
  );
};

const styles = StyleSheet.create({});

export default MeasurmentsFeatures;
