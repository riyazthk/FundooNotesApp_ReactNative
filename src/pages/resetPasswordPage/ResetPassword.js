import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import ResetPasswordStyle from './ResetPasswordStyle';
import {TextField,OutlinedTextField} from 'react-native-material-textfield';
const regexvalidatePassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
);
class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: {
        passwordValue: '',
        error: '',
        errorColor: '',
        passwordCount: 0,
      },
      confirmPassword: {
        confirmPasswordValue: '',
        error: '',
        errorColor: '',
        confirmPasswordCount: 0,
      },
    };
  }
  handlePasswordInput = (password) => {
    if (regexvalidatePassword.test(password)) {
      this.setState({
        password: {
          passwordValue: password,
          passwordCount: 2,
        },
      });
    } else {
      this.setState({
        password: {
          error:
            'password should contain atleast one upperCharacter,number and symbols',
          errorColor: 'red',
          passwordCount: 1,
        },
      });
    }
  };
  handleConfirmPasswordInput = (password) => {
    if (regexvalidatePassword.test(password)) {
      this.setState({
        confirmPassword: {
          confirmPasswordValue: password,
          confirmPasswordCount: 2,
        },
      });
    } else {
      this.setState({
        confirmPassword: {
          error:
            'password should contain atleast one upperCharacter,number and symbols',
          errorColor: 'red',
          confirmPasswordCount: 1,
        },
      });
    }
  };
  render() {
    return (
      <View style={ResetPasswordStyle.resetPasswordHeader}>
        <Card containerStyle={ResetPasswordStyle.resetPasswordCard}>
          <View style={ResetPasswordStyle.resetPasswordView}>
            <Text style={ResetPasswordStyle.resetPasswordText}>
              Reset Password
            </Text>
          </View>
          <View>
            <View style={ResetPasswordStyle.resetEnterPassword}>
              <OutlinedTextField
                label="password"
                textContentType={'password'}
                onChangeText={(password) => this.handlePasswordInput(password)}
                error={this.state.password.error}
                errorColor={this.state.password.errorColor}
              />
            </View>
            <View style={ResetPasswordStyle.resetReEnterPassword}>
              <OutlinedTextField
                label="confirmPassword"
                textContentType={'password'}
                onChangeText={(password) =>
                  this.handleConfirmPasswordInput(password)
                }
                error={this.state.password.error}
                errorColor={this.state.password.errorColor}
              />
            </View>
            <View style={ResetPasswordStyle.resetCardSubmit}>
              <Button title="submit" />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
export default ResetPassword;
