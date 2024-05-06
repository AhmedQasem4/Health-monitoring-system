import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BluetoothConnectionScreen from "../screens/BluetoothConnectionScreen";
import HeartRateScreen from "../screens/HeartRateScreen";
import OxygenScreen from "../screens/OxygenScreen";
import TemperatureScreen from "../screens/TemperatureScreen";
import useBLE from "../hooks/useBLE";
const Connection = () => {
  const { heartRate, oxygenSat, temperature } = useBLE();
  return (
    <View>
      <BluetoothConnectionScreen />
      <HeartRateScreen heartRate={heartRate} />
      <OxygenScreen oxygenSat={oxygenSat} />
      <TemperatureScreen temperature={temperature} />
    </View>
  );
};

export default Connection;

const styles = StyleSheet.create({});

