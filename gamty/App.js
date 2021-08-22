import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page from './src/components/Page';
import Login from './src/pages/auth/Login';
import Register from './src/pages/auth/Register';
import TestingComponents from './src/pages/TestingComponents';
import TestingMessages from './src/pages/testing/TestingMesages';
import TestingShorts from './src/pages/testing/TestingShorts';

export default function App() {
  return (

    <Page scroll>
      <TestingShorts />
    </Page>
    // <Login />
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
