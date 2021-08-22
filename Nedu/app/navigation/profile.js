import React from 'react';
import SettingsScreen from '../screens/admin/Settings';
import { createStackNavigator } from '@react-navigation/stack';



const ProfileStack = createStackNavigator();
const ProfileStackScreen = () =>(
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={SettingsScreen} />
  </ProfileStack.Navigator>
);



export default ProfileStackScreen;