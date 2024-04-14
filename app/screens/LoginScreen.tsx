import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import FormHeader from "../components/FormHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";
const LoginScreen = () => {
  return (
    <Screen>
      <View>
        <Image
          resizeMode="cover"
          style={styles.doctors}
          source={require("../assets/doctors.png")}
        />
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginForm}>
        <FormHeader />
        <TextInput placeholder="Username" style={styles.formField} />
        <View style={styles.formField}>
          <TextInput
            secureTextEntry
            placeholder="Password"
            style={defaultStyles.text}
          />
          <MaterialCommunityIcons name="eye-off" size={30} />
        </View>
        <Text
          style={{
            color: colors.textGreen,
            alignSelf: "flex-end",
            marginRight: 10,
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Forgot Password?
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.LoginButtonText}>Log In</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>
            Don't have an account?{" "}
            <Text
              style={{
                color: colors.textBlue,
                fontSize: 16,
                textDecorationLine: "underline",
                fontWeight: 'bold',
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  doctors: {
    width: "100%",
    height: 280,
  },
  logo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 100,
    height: 100,
  },
  loginForm: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 10,
    gap: 30,
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
  },
  loginButton: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
  },
  LoginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default LoginScreen;
