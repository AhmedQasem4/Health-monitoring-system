import { StyleSheet, Image, View, Text, ViewStyle } from "react-native";
import React from "react";
import Screen from "../screens/Screen";
import colors from "../config/colors";
import CommonHeader from "./CommonHeader";

interface Props{
    imageUri: any,
    text: string,
    value: number,
    style?: ViewStyle | ViewStyle[],
}

const MeasurmentsScreen = ({imageUri,style, text, value}: Props) => {
  return (
    <Screen>
      <CommonHeader logo={true}/>
      <View style={[styles.container, style]}>
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
