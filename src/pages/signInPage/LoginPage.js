import {Button, View} from 'react-native';
import React, {Component} from 'react';
import {Card, Input} from 'react-native-elements';
import styles from './LoginPageStyle';
class LoginPage extends Component {
  render() {
    return (
      <View style={styles.headerScreen}>
        <Card containerStyle={styles.outerCard}>
          <View style={styles.innerCardEmail}>
            <Input placeholder="enter a email" />
          </View>
          <View style={styles.innerCardPassword}>
            <Input placeholder="enter a password" />
          </View>
          <View style={styles.innerCardSubmit}>
            <Button title="submit" type="outline" />
          </View>
        </Card>
      </View>
    );
  }
}
export default LoginPage;
