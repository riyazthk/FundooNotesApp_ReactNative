import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import newUserStyles from './SignUpStyle';
import {OutlinedTextField} from 'react-native-material-textfield';
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        firstNameValue: '',
        error: '',
        errorColor: '',
        firstNameCount: 0,
      },
      lastName: {
        lastNameValue: '',
        error: '',
        errorColor: '',
        lastNameCount: 0,
      },
      email: {
        emailValue: '',
        error: '',
        errorColor: '',
        emailCount: 0,
      },
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
  handlefirstNameInput = () => {
    const value = FirstNameInput(firstNameInputValue);
    if (value === false) {
      this.setState({
        firstName: {
          error: 'invalid email',
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
          error: 'invalid email',
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
  render() {
    return (
      <View style={newUserStyles.newUserHeader}>
        <View>
          <Text style={newUserStyles.newUserTitle}>SignUp</Text>
          <Card containerStyle={newUserStyles.newUserCard}>
            <ScrollView>
              <View style={newUserStyles.newUserFirstName}>
                <OutlinedTextField
                  label="firstName"
                  onChangeText={(firstName) =>
                    this.handlefirstNameInput(firstName)
                  }
                  error={this.state.firstName.error}
                  errorColor={this.state.firstName.errorColor}
                />
              </View>
              <View style={newUserStyles.newUserLastName}>
                <OutlinedTextField
                  label="lastName"
                  onChangeText={(lastName) =>
                    this.handlelastNameInput(lastName)
                  }
                  error={this.state.lastName.error}
                  errorColor={this.state.lastName.errorColor}
                />
              </View>
              <View style={newUserStyles.newUserEmail}>
                <OutlinedTextField
                  label="email"
                  onChangeText={(email) => this.handleemailInput(email)}
                  error={this.state.email.error}
                  errorColor={this.state.email.errorColor}
                />
              </View>
              <View style={newUserStyles.newUserPassword}>
                <OutlinedTextField
                  label="password"
                  textContentType={'password'}
                  onChangeText={(password) =>
                    this.handlePasswordInput(password)
                  }
                  error={this.state.password.error}
                  errorColor={this.state.password.errorColor}
                />
              </View>
              <View style={newUserStyles.newUserConfirmPassword}>
                <OutlinedTextField
                  label="confirmPassword"
                  textContentType={'password'}
                  onChangeText={(confirmPassword) =>
                    this.handleconfirmPasswordInput(confirmPassword)
                  }
                  error={this.state.password.error}
                  errorColor={this.state.password.errorColor}
                />
              </View>
              <View style={newUserStyles.newUserSubmit}>
                <Button title="submit" />
              </View>
            </ScrollView>
          </Card>
        </View>
      </View>
    );
  }
}
export default NewUser;
