import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";

const MedicineAlarm = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MedicineAlarm")}>
      <Image
        source={require("../assets/medicineAlarm.png")}
        style={{ width: "100%" }}
      />
    </TouchableOpacity>
  );
};

export default MedicineAlarm;

const styles = StyleSheet.create({});
