import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "./Screen";
import AppTextInput from "../components/AppTextInput";
import CommonHeader from "../components/CommonHeader";

const EditProfileScreen = () => {
  return (
    <Screen style={{ padding: 10, justifyContent: "center" }}>
      <CommonHeader logo={false}/>
      <View style={styles.editContainer}>
        <Text style={styles.text}>Edit Profile</Text>
        <Image source={require("../assets/editIcon.png")} />
      </View>
      <View style={styles.form}>
        <Image
          source={require("../assets/userImage2.png")}
          style={styles.userImage}
        />
        <AppTextInput label="UserName" />
        <AppTextInput label="Email" />
        <AppTextInput label="Phone" />
        <AppTextInput label="Date of birth" />
        <AppTextInput label="Address" />
      </View>
    </Screen>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  editContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
  },
  form: {
    padding: 20,
  },
  userImage: {
    marginBottom: 20,
    alignSelf: "center",
  },
});
