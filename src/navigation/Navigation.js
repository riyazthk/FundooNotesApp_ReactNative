import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginPage from '../pages/signInPage/LoginPage';
import UserEmail from '../pages/getUserEmailPage/UserEmail';
import ResetPassword from '../pages/resetPasswordPage/ResetPassword';
import NewUser from '../pages/signUpPage/NewUser';

const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginPage"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="userEmail" component={UserEmail} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="signUp" component={NewUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
