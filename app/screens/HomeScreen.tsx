import React from "react";
import { StyleSheet } from "react-native";
import HomeScreenHeader from "../components/HomeScreenHeader";
import MeasurmentsFeatures from "../components/MeasurmentsFeatures";
import MedicineAlarm from "../components/MedicineAlarm";
import Screen from "./Screen";
import ActivitiesFeatures from "../components/ActivitiesFeatures";

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      <HomeScreenHeader
        userImage={require("../assets/userImage.png")}
        userName="Ahmed"
      />
      <MedicineAlarm />
      <MeasurmentsFeatures />
      <ActivitiesFeatures />
    </Screen>
  );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    }
});

export default HomeScreen;
