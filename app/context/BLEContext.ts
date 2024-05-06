import { createContext } from "react";
import { BluetoothLowEnergyApi } from "../hooks/useBLE";
import { Device } from "react-native-ble-plx";

export const BLEContext = createContext<BluetoothLowEnergyApi>({
  requestPermissions: async () => false,
  scanForPeripherals: () => {},
  connectToDevice: async () => {},
  disconnectFromDevice: () => {},
  connectedDevice: null,
  allDevices: [],
  heartRate: 0,
  oxygenSat: 0,
  temperature: 0,
});
