/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {initMessage} from './firebase-messaging';
//import message from './src/fireBaseConfig/fireBaseAuthenticationConfig';
AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerHeadlessTask(
//   'RNFirebseBackgroundMessage',
//   () => message.message,
// );
