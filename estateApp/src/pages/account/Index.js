import React from 'react';

import { StyleSheet, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>

    </Tab.Navigator>
)

function Index(props) {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Index;