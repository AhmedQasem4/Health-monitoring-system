import {  Button, StyleSheet, Switch, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface Props{
  date: Date;
  onPress: () => void;
}

const Alarm = ({date, onPress}:Props) => {
  let medicineTitle = "Panadol";
  const [isActive, setIsActive] = useState(true);
  const toggleSwitch = () => {
    !isActive;
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isActive ? colors.lightGreen : colors.alarm },
      ]}
    >
      <View>
        <Text
          style={[
            styles.medicineTitle,
            { color: isActive ? colors.white : colors.black },
          ]}
        >
          {medicineTitle}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="clock"
            size={40}
            color={isActive ? "#b4e2a4" : colors.lightGray}
          />
          <Text
            style={[
              styles.date,
              { color: isActive ? colors.white : colors.lightGray },
            ]}
          >
            {date.toLocaleTimeString()}
          </Text>
        </View>
      </View>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsActive(!isActive)}
          value={isActive}
        />
         <TouchableHighlight style={{borderRadius: 10,backgroundColor: colors.danger, marginTop: 30, padding: 5,}} onPress={onPress}>
          <Text style={{color: colors.white}}>Delete</Text>
         </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  medicineTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  date: {
    marginLeft: 5,
    fontWeight: "600",
  },
  switch: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alarm;
