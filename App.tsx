import { StyleSheet } from 'react-native';
import HeartRateScreen from './app/screens/HeartRateScreen';
import TemperatureScreen from './app/screens/TemperatureScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import OxygenScreen from './app/screens/OxygenScreen';
import HomeScreen from './app/screens/HomeScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';
import MedicineAlarmScreen from './app/screens/MedicineAlarmScreen';

export default function App() {
  return (
   <MedicineAlarmScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
