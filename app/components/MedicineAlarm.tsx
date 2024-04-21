import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MedicineAlarm = () => {
  return (
    <TouchableOpacity onPress={() => console.log("Image Clicked")}>
      <Image
        source={require("../assets/medicineAlarm.png")}
        style={{ width: "100%" }}
      />
    </TouchableOpacity>
  );
};

export default MedicineAlarm;

const styles = StyleSheet.create({});
