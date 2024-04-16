import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import Screen from "../screens/Screen";
import colors from "../config/colors";

interface Props{
    imageUri: any,
    text: string,
    value: string
}

const MeasurmentsScreen = ({imageUri, text, value}: Props) => {
  return (
    <Screen>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.container}>
        <Image source={imageUri} />
        <Text style={styles.text}>{text}</Text>
        <Image source={require('../assets/thinRing.png')} />
        <Image style={styles.thickRing} source={require('../assets/thickRing.png')} />
        <Text style={styles.value}>{value}</Text>
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

export default MeasurmentsScreen;
