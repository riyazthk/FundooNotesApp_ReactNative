import {Button, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import styles from './LoginPageStyle';
import InputOutline from 'react-native-input-outline';
class LoginPage extends Component {
  render() {
    return (
      // <ScrollView>
      <View style={styles.headerScreen}>
        <View>
          <Text style={styles.loginText}>Login</Text>
          <Card containerStyle={styles.outerCard}>
            <View style={styles.innerCardEmail}>
              <InputOutline placeholder="Email" />
            </View>
            <View style={styles.innerCardPassword}>
              <InputOutline placeholder="password" />
            </View>
            <View>
              <Text style={styles.alignResetPassword}>resetPassword?</Text>
            </View>
            <View style={styles.innerCardSubmit}>
              <Button title="submit" />
            </View>
            <View>
              <Text style={styles.alignSignUp}>createNewOne</Text>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}
export default LoginPage;
