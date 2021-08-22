import React from 'react';
import AdminDashboardScreen from '../screens/admin/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import ApartmentPreviewScreen from '../screens/admin/ApartmentPreview';
import NotificationScreen from '../screens/admin/Notification';
import Header from './Header'

const HomeStack = createStackNavigator();
const HomeStackScreen = () =>(
  <HomeStack.Navigator initialRouteName="AdminDashboardScreen">
    <HomeStack.Screen 
      name="AdminDashboardScreen" 
      component={AdminDashboardScreen}
      options={{headerShown: false}}/>
    <HomeStack.Screen 
      name="Notification" 
      component={NotificationScreen}
      options={{headerShown: false}}
      />
    <HomeStack.Screen 
      name="ApartMentNavigation" 
      component={ApartmentPreviewScreen}
      options={{headerShown: false}}/>
  </HomeStack.Navigator>
);

export default HomeStackScreen;