import {Button, View, Text, KeyboardAvoidingView} from 'react-native';
import React, {Component} from 'react';
import {Card, Input} from 'react-native-elements';
import styles from './LoginPageStyle';
import {ScrollView} from 'react-native-gesture-handler';
import InputOutline from 'react-native-input-outline';
class LoginPage extends Component {
  render() {
    return (
      // <ScrollView>
      <View style={styles.headerScreen}>
        {/* <View style={styles.titleLogin}>
          <Text>Login</Text>
        </View> */}

        <View>
          <Text style={styles.loginText}>Login</Text>
          <Card containerStyle={styles.outerCard}>
            <KeyboardAvoidingView
              behavior="padding"
              contentContainerStyle={{flex: 1}}>
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
            </KeyboardAvoidingView>
          </Card>
        </View>
      </View>
      // </ScrollView>
    );
  }
}
export default LoginPage;
