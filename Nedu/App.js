import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import navigationTheme from './app/navigation/NavigationTheme';
import AuthStackScreen from './app/navigation/Auth';
import MyDrawer from './app/navigation/Drawer';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Splash from './app/screens/auth/Splash';

import { AuthContext } from './context';


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    }
  }, [])


  React.useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])
  if (isLoading) {
    return <Splash/>
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer theme={navigationTheme}>
    {userToken ? (
      <MyDrawer/> 
    ) : (
      <AuthStackScreen/>
    )}
           
    </NavigationContainer>
    </AuthContext.Provider>

   
  );
};
