
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// the navigation container
import { NavigationContainer } from '@react-navigation/native';

// the auth navigator
import AuthNavigator from './src/navigation/AuthNavigator';

import NavigationTheme from './src/navigation/NavigationTheme';
import TestingDrawerNav from './src/pages/TestingDrawerNav';


export default function App() {
  return (

    // Calling the navigator component
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
    // <TestingDrawerNav />
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
