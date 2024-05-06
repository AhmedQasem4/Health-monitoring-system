import { StyleSheet } from 'react-native'
import React from 'react'
import MeasurmentsScreen from '../components/MeasurmentsScreen'
import { useBluetoothScreens } from './BluetoothScreensProvider'

const OxygenScreen = () => {
 
  const {oxygenSat} = useBluetoothScreens();
 
  return (
    <MeasurmentsScreen 
        style={styles.container}
        imageUri={require("../assets/oxygen.png")}
        text='Measuring Oxygen Saturation in blood...'
        value={oxygenSat}
    />
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
    }
})
export default OxygenScreen