import React from 'react';

import { StyleSheet, View } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// the pages
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import Testing from '../../pages/auth/Testing';


// independent navigators



const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Testing" component={Testing} />
    </Stack.Navigator>
)

function AuthNavigator(props) {
    return (
        <StackNavigator />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AuthNavigator;