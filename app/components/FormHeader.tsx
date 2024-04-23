import {  StyleSheet, Text, View , ColorValue} from "react-native";
import React from "react";
import colors from "../config/colors";


const FormHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.paragraph}>Your Digital Care Giver</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
  },
  heading: {
    color: colors.textGreen,
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    color: colors.lightGray,
    fontWeight: 'bold',
  },
});

export default FormHeader;
