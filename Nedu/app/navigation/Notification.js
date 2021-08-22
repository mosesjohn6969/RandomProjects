import React from 'react'
import NotificationScreen from '../screens/admin/Notification';
import AnnoucementScreen from '../screens/admin/Annoucement';
import SosScreen from '../screens/admin/Sos';
import GuestScreen from '../screens/admin/Guest';
import { createStackNavigator } from '@react-navigation/stack';


const NotificationStack = createStackNavigator();
const NotificationStackScreen = () =>(
  <NotificationStack.Navigator >
    <NotificationStack.Screen name="Notifications" component={NotificationScreen} options={{animationEnabled:false}}/>
    <NotificationStack.Screen name="Announcement" component={AnnoucementScreen} options={{animationEnabled:false}}/>
    <NotificationStack.Screen name="Sos" component={SosScreen} options={{animationEnabled:false}}/>
    <NotificationStack.Screen name="Guest" component={GuestScreen} options={{animationEnabled:false}}/>
  </NotificationStack.Navigator>
);

export default NotificationStackScreen;

