import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginPage from '../pages/signInPage/LoginPage';
import UserEmail from '../pages/getUserEmailPage/UserEmail';
import ResetPassword from '../pages/resetPasswordPage/ResetPassword';
import SignUp from '../pages/signUpPage/SignUp';
import HomePage from '../dashBoard/homePage/mainPage/HomePage';
import CreateNotePage from '../dashBoard/homePage/createNotePage/createNote/CreateNotePage';

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
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="createNotePage" component={CreateNotePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
