import { StatusBar } from 'expo-status-bar';
import RootStack from './routes/Stack';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#BAEAFF'/>
      <RootStack />
    </SafeAreaView>
  );
}
