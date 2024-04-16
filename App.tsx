import { StyleSheet } from 'react-native';
import HeartRateScreen from './app/screens/HeartRateScreen';
import TemperatureScreen from './app/screens/TemperatureScreen';
import LoadingScreen from './app/screens/LoadingScreen';

export default function App() {
  return (
   <HeartRateScreen />
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
