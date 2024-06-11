import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.heading}>Forgot Password?</Text>
        <Text style={styles.description}>
          Enter your regisered email and click recover account
        </Text>
        <View style={styles.formField}>
          <MaterialCommunityIcons
            name="email"
            style={{ marginRight: 10 }}
            size={25}
            color={"#a4a4a4"}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={defaultStyles.text}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity
          disabled={!email}
          style={[styles.sendCodeButton, { opacity: !email ? 0.5 : 1 }]}
        >
          <Text style={styles.sendCodeButtonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.notes}>
        <Text style={styles.notesText}>Code will be sent to your email...</Text>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.light,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-end",
    position: "absolute",
    top: 40,
    right: 20,
  },
  forgetPasswordContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 45,
    marginBottom: 30,
  },
  heading: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    color: colors.lightGray,
    fontWeight: "600",
    marginBottom: 20,
  },
  formField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    fontSize: 18,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGray,
    marginBottom: 30,
    backgroundColor: "#EEEEEE",
  },
  sendCodeButton: {
    backgroundColor: colors.lightGreen,
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    alignSelf: "center",
  },
  sendCodeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  notes: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  notesText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default ForgetPasswordScreen;
