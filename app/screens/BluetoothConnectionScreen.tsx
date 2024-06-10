// BluetoothConnectionScreen.tsx
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Device } from "react-native-ble-plx";
import CommonHeader from "../components/CommonHeader";
import colors from "../config/colors";
import { useBluetoothScreens } from "./BluetoothScreensProvider";
import Screen from "./Screen";

const BluetoothConnectionScreen = () => {
  const {
    scanForPeripherals,
    requestPermissions,
    allDevices,
    connectToDevice,
    disconnectFromDevice,
    connectedDevice,
  } = useBluetoothScreens();
  const [scan, setScan] = useState(false);
  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const onScan = () => {
    scanForDevices();
    setScan(true);
  };

  const onConnect = (device: Device) => {
    connectToDevice(device);
    setScan(false);
    console.log(`Connected to ${device.name} successfully`);
  };

  const onDisconnect = () => {
    disconnectFromDevice();
    console.log("Disconnected successfully");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <CommonHeader />
        <TouchableOpacity
          onPress={() => onScan()}
          style={[styles.scanButton, { opacity: scan ? 0.6 : 1 }]}
          disabled={scan === true}
        >
          <Text style={styles.scanText}>{scan ? "Scanning..." : "Scan"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.devicesContainer}>
        {allDevices?.map((device) => (
          <TouchableOpacity
            onPress={() => onConnect(device)}
            key={device.id}
            style={[
              styles.deviceItem,
              {
                backgroundColor:
                  connectedDevice?.id === device.id
                    ? colors.lightGreen
                    : "tomato",
              },
            ]}
          >
            <Text style={styles.deviceName}>{device.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          disabled={!connectedDevice}
          style={[styles.disconnectButton, { opacity: connectedDevice ? 1 : 0.6 }]}
          onPress={() => onDisconnect()}
        >
          <Text style={styles.disconnectText}>Disconnect</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default BluetoothConnectionScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scanButton: {
    backgroundColor: colors.textBlue,
    padding: 10,
    borderRadius: 15,
  },
  scanText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
  },
  devicesContainer: {
    marginTop: 20,
    alignItems: "center",
    flex: 1,
  },
  deviceItem: {
    width: "100%",
    padding: 10,
  },
  deviceName: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
  },
  disconnectButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 16,
    backgroundColor: colors.danger,
  },
  disconnectText: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
});
