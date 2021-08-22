import React from 'react';
import AdminDashboardScreen from '../screens/admin/Dashboard';
import AddUser from '../screens/admin/AddUser';
import SettingsScreen from '../screens/admin/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeButton from './HomeButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import HomeStackScreen from './AppNav';


const Tabs = createBottomTabNavigator();
const TabStackScreen = () =>(
  <Tabs.Navigator headerMode="none" initialRouteName="AdminDashboardScreen" 
        tabBarOptions={{
            showLabel:false, 
            showIcon: true,
            keyboardHidesTabBar: true,
            style:{backgroundColor:'#F5F9FF',
            borderTopWidth: 0,
            position: 'absolute',
            elevation: 0 ,
            position: 'absolute',
            height:60,
            width: "100%",
            }}
          
          
  }>

      <Tabs.Screen 
            name="AddUser" 
            component ={AddUser}
            options={{
                tabBarIcon:() =>
                    <MaterialCommunityIcons name="plus-circle-outline" color= {colors.primary} size={25}/>
        }} />
        <Tabs.Screen name="AdminDashboardScreen" 
            component ={HomeStackScreen}
            options={({navigation}) =>({
                tabBarButton: () => (
                    <HomeButton  
                        onPress={()  => navigation.navigate("AdminDashboardScreen")}
                        />
                    ),
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons 
                        name="home-variant-outline" 
                        color={color} 
                        size={size}/>)                 
            })} />
        <Tabs.Screen name="Settings" 
        component ={SettingsScreen}
        options={{
            tabBarIcon:() =>
                <MaterialCommunityIcons name="cog-outline" color= {colors.primary} size={25}/>
        }} />
  </Tabs.Navigator>
);


export default TabStackScreen;