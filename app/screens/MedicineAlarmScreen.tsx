import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import Alarm from "../components/Alarm";
import CommonHeader from "../components/CommonHeader";

const MedicineAlarmScreen = () => {
  return (
    <ScrollView>
      <Screen style={{ padding: 10, marginVertical: 20, }}>
        <CommonHeader logo={false}/>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Medicine Alarm</Text>
          <TouchableWithoutFeedback onPress={() => console.log("added")}>
            <Text style={styles.addAlarmButton}>Add New</Text>
          </TouchableWithoutFeedback>
        </View>
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
        <Alarm />
      </Screen>
    </ScrollView>
  );
};

export default MedicineAlarmScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  addAlarmButton: {
    backgroundColor: colors.textBlue,
    color: colors.white,
    fontSize: 15,
    padding: 10,
    borderRadius: 15,
  },
});
