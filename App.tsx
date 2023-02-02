import { StatusBar } from 'expo-status-bar';

import { 
  Text, 
  View, 
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  );
}
