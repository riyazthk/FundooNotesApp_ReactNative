import {Button, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import styles from './LoginPageStyle';
import InputOutline from 'react-native-input-outline';
import {OutlinedTextField} from 'react-native-material-textfield';
import {TextField, FilledTextField} from 'react-native-material-textfield';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        emailInput: '',
        error: '',
        errorColor: 'grey',
      },
      password: {
        passwordValue: '',
        error: '',
        errorColor: 'grey',
      },
    };
  }
  handleEmailInput(emailValue) {
    const value = EmailInput(emailValue);
    if (value === false) {
      this.setState({
        email: {
          error: 'invalid email',
          errorColor: 'red',
        },
      });
    } else {
      this.setState({
        email: {
          emailInput: value,
        },
      });
    }
  }
  handlePasswordInput(passwordInputValue) {
    const value = PasswordInput(passwordInputValue);
    if (value === false) {
      console.log(value);

      this.setState({
        password: {
          error: 'password atleast one character,symbols and number',
          errorColor: 'red',
        },
      });
    } else {
      this.setState({
        password: {
          passwordValue: value,
        },
      });
    }
  }
  render() {
    return (
      // <ScrollView>
      <View style={styles.headerScreen}>
        <View>
          <Text style={styles.loginText}>Login</Text>
          <Card containerStyle={styles.outerCard}>
            <View style={styles.innerCardEmail}>
              <TextField
                label="Email"
                onChangeText={(text) => this.handleEmailInput(text)}
                error={this.state.email.error}
                errorColor={this.state.email.errorColor}
              />
            </View>
            <View style={styles.innerCardPassword}>
              <TextField
                label="password"
                textContentType={'password'}
                onChangeText={(password) => this.handlePasswordInput(password)}
                error={this.state.password.error}
                errorColor={this.state.password.errorColor}
              />
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
