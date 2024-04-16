import React from "react";
import MeasurmentsScreen from "../components/MeasurmentsScreen";
const HeartRateScreen = () => {
  return (
    <MeasurmentsScreen
      imageUri={require('../assets/human.png')}
      text="Measuring Heart Rate..."
      value="70 PBM"
    />
  );
};


export default HeartRateScreen;
