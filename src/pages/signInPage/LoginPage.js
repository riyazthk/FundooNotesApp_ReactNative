import {Button, View, Text} from 'react-native';
import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import styles from './LoginPageStyle';
import {TextField, OutlinedTextField} from 'react-native-material-textfield';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import {SignIn} from '../../services/dataBaseController';
// import {openDatabase} from 'react-native-sqlite-storage';
import { AddToken } from '../../dataBase/AddToken';
// var db = openDatabase({name: 'Reactoffline.db'});

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
  handleLoginForm = async (event) => {
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
      // let loginData = {
      //   email: this.state.email.emailInput,
      //   password: this.state.password.passwordValue,
      // };
      //   signIn(loginData).then((response) => {
      //     console.log(response);
      //     let token = response.data.id;
      //     if (response.status !== 200) {
      //       this.setState({
      //         email: {
      //           error: 'check username and password',
      //           errorColor: 'red',
      //         },
      //         password: {
      //           error: 'check username and password',
      //           errorColor: 'red',
      //         },
      //       });
      //     }
      //     if (response.status === 200) {
      //       this.props.navigation.navigate('homePage');
      //     }
      //   });
      // }
      let value = await SignIn(
        this.state.email.emailInput,
        this.state.password.passwordValue,
      );
      console.log('console ', value);
      if (value === 'auth/user-not-found') {
        console.log('error in email');
        this.setState({
          email: {
            error: 'invalid email',
            errorColor: 'red',
          },
        });
      } else if (value === 'auth/wrong-password') {
        console.log('error in passw');
        this.setState({
          password: {
            error: 'invalid password',
            errorColor: 'red',
          },
        });
      } else {
        AddToken(value)
          .then(() => {
            this.props.navigation.navigate('homePage');
          })
          .catch((err) => {
            console.log('database wrongly created');
          });
      }
    }
  };
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
          {/* <Card containerStyle={styles.outerCard}> */}
          <View style={styles.innerCardEmail}>
            <OutlinedTextField
              label="Email"
              onChangeText={(text) => this.handleEmailInput(text)}
              error={this.state.email.error}
              errorColor={this.state.email.errorColor}
            />
          </View>
          <View style={styles.innerCardPassword}>
            <OutlinedTextField
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
              SignUp
            </Text>
          </View>
          {/* </Card> */}
        </View>
      </View>
    );
  }
}
export default LoginPage;
