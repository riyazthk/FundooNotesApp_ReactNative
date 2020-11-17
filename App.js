import firebase from 'react-native-firebase';
import React, {Component} from 'react';
import Navigation from './src/navigation/Navigation';

import {Alert, AsyncStorage, Platform} from 'react-native';
import FCM, {
  FCMEvent,
  NotificationType,
  RemoteNotificationResult,
  WillPresentNotificationResult,
} from 'react-native-fcm';
// import message from '../FundooNotesApp/src/fireBaseConfig/fireBaseAuthenticationConfig'
// import firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fcmToken: '',
    };
  }
  async componentDidMount() {
    this.checkPermission();
    this.createNotification();
    //await setTimeout(this.createNotificationListeners, 10000);
  }

  componentWillUnmount() {
    //  this.notificationListener();
    //  this.notificationOpenedListener();
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
      this.requestPermission();
    } else {
    }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async getToken() {
    this.setState({fcmToken: await AsyncStorage.getItem('fcmToken')});
    console.log('fcm', this.state.fcmToken);
    if (!this.state.fcmToken) {
      this.setState({fcmToken: await firebase.messaging().getToken()});
      if (this.state.fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', this.state.fcmToken);
        // console.log('gfvgfgtoken', fcmToken);
        // Alert.alert('gfvgfgtoken', fcmToken);
      }
    }
  }
  // async createNotificationListeners() {
  //   /*
  //    * Triggered when a particular notification has been received in foreground
  //    * */
  //   this.notificationListener = firebase
  //     .notifications()
  //     .onNotification((notification) => {
  //       const {title, body} = notification;
  //       this.showAlert(title, body);
  //     });
  //   this.notificationOpenedListener = firebase
  //     .notifications()
  //     .onNotificationOpened((notificationOpen) => {
  //       const {title, body} = notificationOpen.notification;
  //       this.showAlert(title, body);
  //     });

  //   /*
  //    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
  //    * */
  //   const notificationOpen = await firebase
  //     .notifications()
  //     .getInitialNotification();
  //   if (notificationOpen) {
  //     const {title, body} = notificationOpen.notification;
  //     this.showAlert(title, body);
  //   }
  //   /*
  //    * Triggered for data only payload in foreground
  //    * */
  //   this.messageListener = firebase.messaging().onMessage((message) => {
  //     //process data message
  //     console.log(JSON.stringify(message));
  //     this.showAlert('sdf', 'sed');
  //   });
  // }
  // showAlert(title, body) {
  //   Alert.alert(
  //     title,
  //     body,
  //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
  //     {cancelable: false},
  //   );
  // }
  async onNotification(cb) {
    this.createNotificationListeners = FCM.on(
      FCMEvent.Notification,
      (notif) => {
        cb(notif);

        if (Platform.OS === 'ios' || Platform.OS === 'android') {
          switch (notif._notificationType) {
            case NotificationType.Remote:
              notif.finish(RemoteNotificationResult.NewData);
              break;
            case NotificationType.NotificationResponse:
              notif.finish();
              break;
            case NotificationType.WillPresent:
              notif.finish(WillPresentNotificationResult.All);
              break;
          }
        }
      },
    );
  }
  async createNotification() {
    let body = JSON.stringify({
      to: this.state.fcmToken,
      notification: {
        title: 'title',
        body: 'hello',
        sound: 'default',
      },
      priority: 'high',
    });

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Content-Length': parseInt(body.length),
      Authorization:
        'key=' +
        'AAAA3kumOZI:APA91bFHIuujMXPci_aV9gqvLy6ADe0DOJ4VC7IN5dWis32--HXJYJo_38Aacazy0kfY5yu5E5HrdzIhJW2h9RP_zx3I9ad9Xuoy9ddzfm_g573OugYWJBi9q1ab3QJ0Fgogo-jjBbXG',
    });
    fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: headers,
      body: body,
    })
      .then((res) => {
        console.log('entry', res);
        if (res.status === 200) {
          console.log('entry');
          this.onNotification((data) => {
            console.log('data', data);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // this.messageListener = firebase.messaging().onMessage((message) => {
    //     //process data message
    //     console.log(JSON.stringify(message));
    //     this.showAlert('sdf', 'sed');
    //   });
  }
  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}
export default App;
