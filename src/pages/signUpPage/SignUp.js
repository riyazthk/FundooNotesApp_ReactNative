import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import newUserStyles from './SignUpStyle';
import {Input} from 'react-native-elements';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';
import EmailInput from '../signInPage/EmailInput';
import PasswordInput from '../signInPage/PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import {SignUpData} from '../../services/UserServices';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        firstNameValue: '',
        error: '',
        errorColor: 'grey',
        firstNameCount: 0,
      },
      lastName: {
        lastNameValue: '',
        error: '',
        errorColor: 'grey',
        lastNameCount: 0,
      },
      email: {
        emailValue: '',
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
      confirmPassword: {
        confirmPasswordValue: '',
        error: '',
        errorColor: 'grey',
        confirmPasswordCount: 0,
      },
    };
  }
  handlefirstNameInput = (firstNameInputValue) => {
    const value = FirstNameInput(firstNameInputValue);
    if (value === false) {
      this.setState({
        firstName: {
          error: 'invalid firstName',
          errorColor: 'red',
          firstNameCount: 1,
        },
      });
    } else {
      this.setState({
        firstName: {
          firstNameValue: value,
          firstNameCount: 2,
        },
      });
    }
  };
  handlelastNameInput = (lastNameInputValue) => {
    const value = LastNameInput(lastNameInputValue);
    if (value === false) {
      this.setState({
        lastName: {
          error: 'invalid lastName',
          errorColor: 'red',
          lastNameCount: 1,
        },
      });
    } else {
      this.setState({
        lastName: {
          lastNameValue: value,
          lastNameCount: 2,
        },
      });
    }
  };
  handleemailInput = (emailValue) => {
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
          emailValue: value,
          emailCount: 2,
        },
      });
    }
  };
  handlePasswordInput = (passwordInputValue) => {
    const value = PasswordInput(passwordInputValue);
    if (value === false) {
      console.log(value);
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
  };
  handleconfirmPasswordInput = (confirmPasswordInputValue) => {
    const value = ConfirmPasswordInput(confirmPasswordInputValue);
    if (value === false) {
      this.setState({
        confirmPassword: {
          error: 'password atleast one character,symbols and number',
          errorColor: 'red',
          confirmPasswordCount: 1,
        },
      });
    } else {
      this.setState({
        confirmPassword: {
          confirmPasswordValue: value,
          confirmPasswordCount: 2,
        },
      });
    }
  };
  handleSignUpSubmit = async (event) => {
    if (
      this.state.password.passwordValue !==
      this.state.confirmPassword.confirmPasswordValue
    ) {
      this.setState({
        confirmPassword: {
          error: 'password not matching',
          errorColor: 'red',
        },
      });
    }
    if (this.state.password.passwordCount === 0) {
      this.setState({
        password: {
          error: 'Password should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (this.state.confirmPassword.confirmPasswordCount === 0) {
      this.setState({
        confirmPassword: {
          error: 'confirmPassword should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (this.state.firstName.firstNameCount === 0) {
      this.setState({
        firstName: {
          error: 'firstName should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (this.state.lastName.lastNameCount === 0) {
      this.setState({
        lastName: {
          error: 'lastName should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (this.state.email.emailCount === 0) {
      this.setState({
        email: {
          error: 'lastName should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (
      this.state.firstName.firstNameCount === 2 &&
      this.state.lastName.lastNameCount === 2 &&
      this.state.password.passwordCount === 2 &&
      this.state.confirmPassword.confirmPasswordCount === 2 &&
      this.state.email.emailCount === 2
    ) {
      let value = await SignUpData(
        this.state.firstName.firstNameValue,
        this.state.lastName.lastNameValue,
        this.state.email.emailValue,
        this.state.password.passwordValue,
      );
      if (value === 'The email address is already in use by another account.') {
        this.setState({
          email: {
            error: 'email already register',
            errorColor: 'red',
          },
        });
      } else {
        this.props.navigation.navigate('loginPage');
      }
    }
  };
  render() {
    return (
      <View style={newUserStyles.newUserHeader}>
        <View>
          <View style={newUserStyles.newUserTitleBox}>
            <Text style={newUserStyles.newUserTitle}>SignUp</Text>
          </View>
          {/* <Card containerStyle={newUserStyles.newUserCard}> */}
          <ScrollView>
            <View style={newUserStyles.newUserFirstName}>
              <Input
                placeholder="firstName"
                onChangeText={(firstName) =>
                  this.handlefirstNameInput(firstName)
                }
                errorMessage={this.state.firstName.error}
                // errorColor={this.state.firstName.errorColor}
              />
            </View>
            <View style={newUserStyles.newUserLastName}>
              <Input
                placeholder="lastName"
                onChangeText={(lastName) => this.handlelastNameInput(lastName)}
                errorMessage={this.state.lastName.error}
                // errorColor={this.state.lastName.errorColor}
              />
            </View>
            <View style={newUserStyles.newUserEmail}>
              <Input
                placeholder="email"
                onChangeText={(email) => this.handleemailInput(email)}
                errorMessage={this.state.email.error}
                // errorColor={this.state.email.errorColor}
              />
            </View>
            <View style={newUserStyles.newUserPassword}>
              <Input
                placeholder="password"
                // textContentType={'password'}
                onChangeText={(password) => this.handlePasswordInput(password)}
                errorMessage={this.state.password.error}
                errorColor={this.state.password.errorColor}
              />
            </View>
            <View style={newUserStyles.newUserConfirmPassword}>
              <Input
                placeholder="confirmPassword"
                // textContentType={'password'}
                onChangeText={(confirmPassword) =>
                  this.handleconfirmPasswordInput(confirmPassword)
                }
                errorMessage={this.state.confirmPassword.error}
                // errorColor={this.state.confirmPassword.errorColor}
              />
            </View>
            <View style={newUserStyles.newUserSubmit}>
              <Button title="submit" onPress={this.handleSignUpSubmit} />
            </View>
          </ScrollView>
          {/* </Card> */}
        </View>
      </View>
    );
  }
}
export default SignUp;
