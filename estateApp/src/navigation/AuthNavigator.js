import React from 'react';

import { StyleSheet, View } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// the pages
import Login from '../pages/home/Login';
import Register from '../pages/home/Register';
import Welcome from '../pages/home/Welcome';

// independent navigators
import AdminNavigator from './AdminNavigator';
import AccountNavigator from './AccountNavigator';


const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="AdminDashboard" component={AdminNavigator}
            options={{
                // headerShown: true,
                headerStyle: { backgroundColor: "green", },
                headerTintColor: "white",
                headerTitle: "Estate Dashboard"
            }} />


        <Stack.Screen name="UserDashboard" component={AccountNavigator}
            options={{ headerShown: true }} />

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