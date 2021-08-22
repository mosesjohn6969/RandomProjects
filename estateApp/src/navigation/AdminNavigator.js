import React from 'react';

import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// the pages to be used
import daDashboard from '../pages/account/Dashboard';
import AddApartment from '../pages/admin/AddApartment';

// importing icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// independent navigators
import HomeNavigator from './Admin/HomeNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "green",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black"
        }}>

        {/* The Tabs within*/}
        <Tab.Screen name="Home" component={HomeNavigator}
            options={
                ({ route }) => ({
                    // disabling the bottom tab for some inner component pages
                    tabBarVisible: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""

                        if (routeName === "PreviewAppartment") {
                            return false
                        }

                        return true
                    })(route),
                    // setting a tab bar icon
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />

                })
            } />

        <Tab.Screen name="Add" component={AddApartment} />
        <Tab.Screen name="Appartments" component={daDashboard} />
    </Tab.Navigator>
)

function AdminNavigator(props) {
    return (
        <TabNavigator />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AdminNavigator;