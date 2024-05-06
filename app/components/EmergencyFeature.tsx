import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Features from "./Features";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";
import colors from "../config/colors";
const EmergencyFeature = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  return (
    <Features heading="Emergency help needed?">
      <TouchableOpacity style={styles.sosContainer} onPress={()=> navigation.navigate("Emergency")}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </Features>
  );
};

const styles = StyleSheet.create({
  sosContainer:{
    backgroundColor: '#E63950',
    opacity: 0.90,
    padding: 10,
    borderRadius: 17,
    width: "70%",
    marginLeft: 55,
  },
  sosText:{
    fontSize: 30,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
  }
});

export default EmergencyFeature;
