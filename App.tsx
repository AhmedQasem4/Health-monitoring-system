import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import ForgetPasswordScreen from './app/screens/ForgetPasswordScreen';

export default function App() {
  return (
   <ForgetPasswordScreen />
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
