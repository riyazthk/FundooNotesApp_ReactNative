import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../pages/signInPage/LoginPage';
import UserEmail from '../pages/getUserEmailPage/UserEmail';
import ResetPassword from '../pages/resetPasswordPage/ResetPassword';
import SignUp from '../pages/signUpPage/SignUp';
import HomePage from '../dashBoard/homePage/mainPage/headerHomePage/HomePage';
import CreateNotePage from '../dashBoard/homePage/createNotePage/createNote/CreateNotePage';
import navigationDrawer from '../dashBoard/drawerPage/DrawerComponent';
import ArchieveNote from '../dashBoard/homePage/createNotePage/archieveNote/ArchieveNote';
import DrawerComponent from '../dashBoard/drawerPage/DrawerComponent';
import RestorePage from '../dashBoard/homePage/createNotePage/delete/RestorePage';

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user ? 'homePage' : 'loginPage'}
        // screenOptions={{headerShown: false}}>
        initialRouteName={'homePage'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="userEmail" component={UserEmail} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="homePage" component={DrawerComponent} />
        <Stack.Screen name="createNotePage" component={CreateNotePage} />
        <Stack.Screen name="restorePage" component={RestorePage} />
        {/* <Stack.Screen name="drawer" component={DrawerComponent} /> */}
        {/* <DrawerComponent /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
