import React from "react";
import MeasurmentsScreen from "../components/MeasurmentsScreen";
import useBLE from "../hooks/useBLE";
import { useBluetoothScreens } from "./BluetoothScreensProvider";


const HeartRateScreen = () => {
  const {heartRate} = useBluetoothScreens();
  return (
    <MeasurmentsScreen
      imageUri={require('../assets/human.png')}
      text="Measuring Heart Rate..."
      value={heartRate}
      valueLabeL="bpm"
    />
  );
};


export default HeartRateScreen;
