import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Features from "./Features";
import Card from "./Card";

const ActivitiesFeatures = () => {
  return (
    <Features heading="Activities">
      <View style={styles.container}>
          <Card
            iconUri={require("../assets/medicineIcon.png")}
            label="search medicine"
            width={130}
          />
          <Card
            iconUri={require("../assets/reportsIcon.png")}
            label="Reports"
            width={130}
          />
      </View>
    </Features>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    }
});

export default ActivitiesFeatures;

