import React from 'react';

import { StyleSheet, View } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// the pages
import Welcome from '../pages/auth/Welcome';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Authentication from '../pages/auth/Authentication';

// independent navigators
import AccountNavigator from './AccountNavigator';

// the stack navigation object
const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
        {/* The Pages */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Authentication" component={Authentication} />

        {/* The independent Navigators */}
        <Stack.Screen name="Account" component={AccountNavigator}
            options={{
                headerShown: true,
                // headerStyle: { backgroundColor: "green", },
                headerTintColor: "white",
                headerTitle: "Account Dashboard"
            }} />

    </Stack.Navigator>
)

// returning the object
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