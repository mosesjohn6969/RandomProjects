import React from 'react';

import { StyleSheet, View } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// the pages
import Dashboard from '../../pages/admin/Dashboard';
import PreviewAppartment from '../../pages/admin/PreviewAppartment';

const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard}
            options={{
                headerShown: false,
                headerStyle: { backgroundColor: "green", },
                headerTintColor: "white",
                headerTitle: "Estate Dashboard"
            }} />

        <Stack.Screen name="PreviewAppartment" component={PreviewAppartment}
            options={{
                headerStyle: { backgroundColor: "green", },
                headerTintColor: "white",
                headerTitle: "Appartment Preview",
            }} />
    </Stack.Navigator>
)

function HomeNavigator(props) {
    return (
        <StackNavigator />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default HomeNavigator;