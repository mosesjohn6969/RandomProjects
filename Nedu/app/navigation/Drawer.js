import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './Tab';
import ProfileStackScreen from './profile';
import NotificationStackScreen from './Notification';







const Drawer = createDrawerNavigator();
const MyDrawer = () =>(
  <Drawer.Navigator headerMode="none">
    <Drawer.Screen name="Home" component={TabStackScreen} options={{headerShown: false}}/>
    <Drawer.Screen name="Add Apartment" component={ProfileStackScreen} />    
    <Drawer.Screen name="Add Guest" component={ProfileStackScreen} />    
    <Drawer.Screen name="Get Guest Code" component={ProfileStackScreen} /> 
    <Drawer.Screen name="Notification" component={NotificationStackScreen} />
    <Drawer.Screen name="Settings" component={ProfileStackScreen} />    
  </Drawer.Navigator>
);


export default MyDrawer;

