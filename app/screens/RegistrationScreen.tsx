import {
  Button,
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
import FormHeader from "../components/FormHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigateProps } from "../../type";
import { useAuth } from "../context/AuthContext";
const RegistrationScreen = () => {
  const navigation = useNavigation<HomeScreenNavigateProps>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const { signUp } = useAuth();
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
      <View style={styles.signupForm}>
        <FormHeader />
        <TextInput placeholder="Username" style={styles.formField} />
        <TextInput
          placeholder="Email"
          style={styles.formField}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.formField}>
          <TextInput
            secureTextEntry={secureText}
            placeholder="Password"
            style={defaultStyles.text}
            value={password}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons onPress={()=> setSecureText(!secureText)} name="eye-off" size={30} />
        </View>
        {/* <View style={styles.formField}>
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            style={defaultStyles.text}
          />
          <MaterialCommunityIcons name="eye-off" size={30} />
        </View> */}
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              signUp({ email, password });
              navigation.navigate("Login");
            }}
            style={styles.signupButton}
          >
            <Text style={styles.singupButtonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>
            You already have an account?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: colors.textBlue,
                  fontSize: 16,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
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
  signupForm: {
    backgroundColor: colors.light,
    flex: 1,
    padding: 10,
    gap: 10,
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
  signupButton: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    marginTop: 10,
  },
  singupButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default RegistrationScreen;
