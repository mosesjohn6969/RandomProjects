import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// the navigation container
import { NavigationContainer } from '@react-navigation/native';

// importing the navigator component
import AuthNavigator from './src/navigation/auth/AuthNavigator';

import NavigationTheme from './src/navigation/theme/NavigationTheme'

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
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
