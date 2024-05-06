// BluetoothScreensProvider.tsx
import React, { createContext, ReactNode, useContext } from 'react';
import useBLE, { BluetoothLowEnergyApi } from '../hooks/useBLE';

// Define the type for the context
interface BluetoothScreensContextType extends BluetoothLowEnergyApi {}

// Create the Bluetooth screens context
const BluetoothScreensContext = createContext<BluetoothScreensContextType | null>(null);

interface Props {
  children: ReactNode;
}

// BluetoothScreensProvider component
export const BluetoothScreensProvider = ({ children }: Props) => {
  const bluetoothApi = useBLE(); // Get the values from the useBLE hook

  return (
    <BluetoothScreensContext.Provider value={bluetoothApi}>
      {children}
    </BluetoothScreensContext.Provider>
  );
};

// Custom hook to consume the Bluetooth screens context
export const useBluetoothScreens = (): BluetoothScreensContextType => {
  const bluetoothScreensContext = useContext(BluetoothScreensContext);

  if (!bluetoothScreensContext) {
    throw new Error('useBluetoothScreens must be used within a BluetoothScreensProvider');
  }

  return bluetoothScreensContext;
};
