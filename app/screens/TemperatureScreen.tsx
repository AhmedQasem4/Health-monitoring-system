import React from "react";
import MeasurmentsScreen from "../components/MeasurmentsScreen";
import useBLE from "../hooks/useBLE";
import { useBluetoothScreens } from "./BluetoothScreensProvider";


const TemperatureScreen = () => {
  const {temperature} = useBluetoothScreens();
  return (
    <MeasurmentsScreen
      imageUri={require('../assets/temperature.png')}
      text="Measuring Temperature..."
      value={temperature}
      valueLabeL={"°C"}
    />
  );
};


export default TemperatureScreen;
