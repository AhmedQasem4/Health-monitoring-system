import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import Features from "./Features";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";
const ActivitiesFeatures = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>(); 
  return (
    <Features heading="Activities">
      <View style={styles.container}>
        <Card
          iconUri={require("../assets/medicineIcon.png")}
          label="search medicine"
          width={140}
          onPress={() => Alert.alert("Comming Soon...")}
        />
        <Card
          iconUri={require("../assets/reportsIcon.png")}
          label="Reports"
          width={140}
          onPress={() => Alert.alert("Comming Soon...")}
        />
      </View>
    </Features>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
});

export default ActivitiesFeatures;
