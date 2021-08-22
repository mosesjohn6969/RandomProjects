import React from 'react';
import { StyleSheet } from 'react-native';

// the navigation container
import { NavigationContainer } from '@react-navigation/native';

// the auth navigator
import AuthNavigator from './src/navigation/AuthNavigator';

import NavigationTheme from './src/navigation/NavigationTheme';


export default function App() {
  return (
    // Calling the navigator component

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
