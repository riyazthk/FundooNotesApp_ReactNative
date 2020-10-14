import {View, Text, Button} from 'react-native';
import React, {Component} from 'react';
import {TextField, OutlinedTextField} from 'react-native-material-textfield';
import {Card} from 'react-native-elements';
import EmailStyle from './UserEmailStyle';
const regexValidateEmail = new RegExp(
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
);
class UserEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        emailValue: '',
        error: '',
        errorColor: 'grey',
        emailCount: 0,
      },
    };
  }
  handleEmailInput = (value) => {
    if (regexValidateEmail.test(value)) {
      this.setState({
        email: {
          emailValue: value,
          emailCount: 2,
        },
      });
    } else {
      this.setState({
        email: {
          error: 'invalid email',
          errorColor: 'red',
          emailCount: 1,
        },
      });
    }
  };
  handleSubmitForm = () => {
    if (
      this.state.email.emailCount === 0 ||
      this.state.email.emailCount === 1
    ) {
      this.setState({
        email: {
          error: 'email should not be empty',
          errorColor: 'red',
        },
      });
    }
    if (this.state.email.emailCount === 2) {
        this.props.navigation.navigate('resetPassword');
      // console.log('sucess');
    }
  };
  render() {
    return (
      <View style={EmailStyle.userEmailHeader}>
        <Card containerStyle={EmailStyle.emailCard}>
          <View style={EmailStyle.userEmailView}>
            <Text style={EmailStyle.UserEmailinnerCardText}>UserEmail</Text>
          </View>
          <View style={EmailStyle.userMailTextField}>
            <OutlinedTextField
              label="email"
              onChangeText={(email) => this.handleEmailInput(email)}
              error={this.state.email.error}
              errorColor={this.state.email.errorColor}
            />
          </View>
          <View style={EmailStyle.emailCardSubmit}>
            <Button title="submit" onPress={this.handleSubmitForm} />
          </View>
        </Card>
      </View>
    );
  }
}
export default UserEmail;
