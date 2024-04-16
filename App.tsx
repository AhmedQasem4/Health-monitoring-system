import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import ForgetPasswordScreen from './app/screens/ForgetPasswordScreen';
import EmergencyScreen from './app/screens/EmergencyScreen';

export default function App() {
  return (
   <EmergencyScreen />
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
