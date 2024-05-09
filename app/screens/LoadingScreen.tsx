import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Screen from "./Screen";

const LoadingScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={{width: 150, height: 150 }} source={require("../assets/logo.png")} />
      <Image
        resizeMode="contain"
        style={styles.loadingLogo}
        source={require("../assets/loadingLogo.png")}
      />
      <Image style={styles.doctor} source={require("../assets/doctor.png")} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  loadingLogo: {
    marginLeft: 10,
  },
  doctor: {
    alignSelf: 'flex-end',
  },
});

export default LoadingScreen;
