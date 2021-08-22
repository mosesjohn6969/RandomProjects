import React from 'react';

import { StyleSheet, View } from 'react-native';

// navigation
import { createStackNavigator } from '@react-navigation/stack';

// the pages
import Home from '../pages/account/Home';
import Product from '../pages/account/Product';
import Basket from '../pages/account/Basket';
import OrderStatus from '../pages/account/OrderStatus';
import DeliveryStatus from '../pages/account/DeliveryStatus';

// the stack navigation object
const Stack = createStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">

        {/* The Pages */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Basket" component={Basket} />
        <Stack.Screen name="OrderStatus" component={OrderStatus} />
        <Stack.Screen name="ManageOrder" component={DeliveryStatus} />

    </Stack.Navigator>
)

// returning the object
function AccountNavigator(props) {
    return (
        <StackNavigator />
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default AccountNavigator;