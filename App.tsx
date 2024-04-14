import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';

export default function App() {
  return (
   <RegistrationScreen />
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
