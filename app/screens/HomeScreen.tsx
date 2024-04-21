import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import HomeScreenHeader from "../components/HomeScreenHeader";

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      <HomeScreenHeader
        userImage={require("../assets/userImage.png")}
        userName="Ahmed"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
    }
});

export default HomeScreen;
