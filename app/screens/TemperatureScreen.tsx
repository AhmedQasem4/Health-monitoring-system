import React from "react";
import MeasurmentsScreen from "../components/MeasurmentsScreen";
const TemperatureScreen = () => {
  return (
    <MeasurmentsScreen
      imageUri={require('../assets/temperature.png')}
      text="Measuring Temperature..."
      value="39.7 C°"
    />
  );
};


export default TemperatureScreen;
