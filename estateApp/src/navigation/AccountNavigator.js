import React from 'react';

import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// the pages to be used
import Dashboard from '../pages/account/Dashboard';
import daDashboard from '../pages/admin/Dashboard';

// importing icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "green",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black"
        }}
    >
        {/* The Tabs within*/}
        <Tab.Screen name="Home" component={Dashboard}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
            }} />

        <Tab.Screen name="Add" component={daDashboard} />
        <Tab.Screen name="Appartments" component={daDashboard} />
    </Tab.Navigator>
)

function AccountNavigator(props) {
    return (
        <TabNavigator />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AccountNavigator;