import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import ForgetPasswordScreen from "./app/screens/ForgetPasswordScreen";
import EmergencyScreen from "./app/screens/EmergencyScreen";
import HomeScreen from "./app/screens/HomeScreen";
import EditProfileScreen from "./app/screens/EditProfileScreen";
import MedicineAlarmScreen from "./app/screens/MedicineAlarmScreen";
import BluetoothConnectionScreen from "./app/screens/BluetoothConnectionScreen";
import HeartRateScreen from "./app/screens/HeartRateScreen";
import TemperatureScreen from "./app/screens/TemperatureScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import OxygenScreen from "./app/screens/OxygenScreen";
import { BluetoothScreensProvider } from "./app/screens/BluetoothScreensProvider";
import { HomeScreenNavigateProps } from "./type";
import { AuthProvider } from "./app/context/AuthContext";

const Stack = createNativeStackNavigator<HomeScreenNavigateProps>();

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
});

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <AuthProvider>
          <BluetoothScreensProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegistrationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Emergency"
                component={EmergencyScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Temperature"
                component={TemperatureScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Oxygen"
                component={OxygenScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MedicineAlarm"
                component={MedicineAlarmScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BluetoothConnection"
                component={BluetoothConnectionScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HeartRate"
                component={HeartRateScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </BluetoothScreensProvider>
        </AuthProvider>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
