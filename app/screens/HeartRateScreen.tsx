import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Screen from "./Screen";
import colors from "../config/colors";

const HeartRateScreen = () => {
  return (
    <Screen>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.container}>
        <Image source={require("../assets/human.png")} />
        <Text style={styles.text}>Measuring Heart Rate...</Text>
        <Image source={require('../assets/thinRing.png')} />
        <Image style={styles.thickRing} source={require('../assets/thickRing.png')} />
        <Text style={styles.value}>70 PBM</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-end",
  },
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  thickRing:{
    position: 'absolute',
    bottom: 1,
  },
  value:{
    position: 'absolute',
    bottom: 50,
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.textBlue,
  }

});

export default HeartRateScreen;
