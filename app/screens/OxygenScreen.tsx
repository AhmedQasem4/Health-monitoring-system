import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import MeasurmentsScreen from '../components/MeasurmentsScreen'

const OxygenScreen = () => {
  return (
    <MeasurmentsScreen 
        style={styles.container}
        imageUri={require("../assets/oxygen.png")}
        text='Measuring Oxygen Saturation in blood...'
        value='80%'
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