import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginPage from '../pages/signInPage/LoginPage';
import UserEmail from '../pages/getUserEmailPage/UserEmail';
import ResetPassword from '../pages/resetPasswordPage/ResetPassword';
import SignUp from '../pages/signUpPage/SignUp';
import HomePage from '../dashBoard/homePage/HomePage';
import {AuthContext} from './AuthenticationProvider';
import {firebaseConfig} from '../fireBaseConfig/fireBaseAuthenticationConfig';
const Stack = createStackNavigator();
function Navigation() {
  // const {user, setUser} = useContext(AuthContext);
  // const {initializing, setInitializing} = useState(true);
  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);
  // if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={user ? 'homePage' : 'loginPage'}
        // screenOptions={{headerShown: false}}>
        initialRouteName={'loginPage'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="userEmail" component={UserEmail} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="homePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
