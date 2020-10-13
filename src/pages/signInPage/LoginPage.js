import {Button, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import styles from './LoginPageStyle';
import InputOutline from 'react-native-input-outline';
import {OutlinedTextField} from 'react-native-material-textfield';
import {TextField, FilledTextField} from 'react-native-material-textfield';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitForm from './SubmitForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        emailInput: '',
        error: '',
        errorColor: 'grey',
        emailCount: 0,
      },
      password: {
        passwordValue: '',
        error: '',
        errorColor: 'grey',
        passwordCount: 0,
      },
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLoginForm = this.handleLoginForm.bind(this);
  }
  handleEmailInput(emailValue) {
    const value = EmailInput(emailValue);
    if (value === false) {
      this.setState({
        email: {
          error: 'invalid email',
          errorColor: 'red',
          emailCount: 1,
        },
      });
    } else {
      this.setState({
        email: {
          emailInput: value,
          emailCount: 2,
        },
      });
    }
  }
  handlePasswordInput(passwordInputValue) {
    const value = PasswordInput(passwordInputValue);
    if (value === false) {
      this.setState({
        password: {
          error: 'password atleast one character,symbols and number',
          errorColor: 'red',
          passwordCount: 1,
        },
      });
    } else {
      this.setState({
        password: {
          passwordValue: value,
          passwordCount: 2,
        },
      });
    }
  }
  handleLoginForm() {
    if (
      this.state.email.emailCount === 1 ||
      this.state.password.passwordCount === 1 ||
      this.state.email.emailCount === 0 ||
      this.state.password.passwordCount === 0
    ) {
      if (this.state.email.emailCount === 0) {
        this.setState({
          email: {error: 'email should not empty', errorColor: 'red'},
        });
      }
      if (this.state.password.passwordCount === 0) {
        this.setState({
          password: {error: 'password should not empty', errorColor: 'red'},
        });
      }
    }
    if (
      this.state.email.emailCount === 2 &&
      this.state.password.passwordCount === 2
    ) {
      console.log('sucess');
    }
  }
  handleSignUp = () => {
    this.props.navigation.navigate('signUp');
  };
  handleResetPassword = () => {
    this.props.navigation.navigate('userEmail');
  };
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
              <Text
                style={styles.alignResetPassword}
                onPress={this.handleResetPassword}>
                resetPassword?
              </Text>
            </View>
            <View style={styles.innerCardSubmit}>
              <Button title="submit" onPress={this.handleLoginForm} />
            </View>
            <View>
              <Text style={styles.alignSignUp} onPress={this.handleSignUp}>
                createNewOne
              </Text>
            </View>
          </Card>
        </View>
      </View>
    );
  }
}
export default LoginPage;
