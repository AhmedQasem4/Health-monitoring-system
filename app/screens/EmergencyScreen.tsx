import { StyleSheet, Text, TouchableOpacity, View,Alert, Image } from "react-native";
import React from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import CommonHeader from "../components/CommonHeader";
import * as Linking from 'expo-linking';
const EmergencyScreen = () => {
  const handleSOSPress = () => {
    Alert.alert(
      "Emergency Call",
      "Are you sure you want to call emergency services?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Call",
          onPress: () => Linking.openURL('tel:123')
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <Screen style={styles.screen}>
      <CommonHeader logo={true}/>
      <View style={styles.container}>
        <Text style={styles.heading}>Emergency</Text>
        <TouchableOpacity onPress={handleSOSPress}>
          <View style={styles.sosContainer}>
            <Image
              style={{ width: 190, height: 190, position: "absolute" }}
              source={require("../assets/redRing.png")}
            />
            <Image
              style={{
                width: 160,
                height: 160,
                position: "absolute",
              }}
              source={require("../assets/redRing.png")}
            />
            <Image
              style={{
                width: 135,
                height: 135,
                position: "absolute",
              }}
              source={require("../assets/redRing.png")}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.white,
              }}
            >
              SOS
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.description}>
          Please Standby, We Are Currently Requesting For Help...
        </Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    justifyContent: "center",
  },
  container: {
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    height: "80%",
    borderRadius: 30,
  },
  heading: {
    color: "#EA596C",
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    color: colors.lightGray,
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 40,
  },
  sosContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EmergencyScreen;
