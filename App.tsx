import { StyleSheet } from 'react-native';
import HeartRateScreen from './app/screens/HeartRateScreen';

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
