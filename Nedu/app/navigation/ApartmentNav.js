
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AdminDashboardScreen from '../screens/admin/Dashboard';
import ApartmentPreviewScreen from '../screens/admin/ApartmentPreview';

const Stack = createStackNavigator();

const ApartmentNav = () => (

    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Details" component={ApartmentPreviewScreen} />
    </Stack.Navigator>
);

export default ApartmentNav;