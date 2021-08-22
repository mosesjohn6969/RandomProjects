import React from 'react'
import MyDrawer from './Drawer';
import Register from '../screens/auth/Register';
import AdminLoginScreen from '../screens/auth/Login';
import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = createStackNavigator();
const AuthStackScreen = () =>(
  <AuthStack.Navigator headerMode="none" initialRouteName="AdminLoginScreen">
    <AuthStack.Screen name="AdminLoginScreen" component={AdminLoginScreen} options={{title: "Login"}}/>
    <AuthStack.Screen name="Register" component={Register} options={{title:"Register"}}/>
    <AuthStack.Screen name="Dasboard" component={MyDrawer} options={{headerShown: false}}/>
  </AuthStack.Navigator>
);


export default AuthStackScreen;