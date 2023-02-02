import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
  SafeAreaView,
} from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaView 
      style={{ 
        flex: 1, 
        backgroundColor: '#121212' 
      }}
    >
      <Routes />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}
