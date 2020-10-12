import {View, Text} from 'react-native';
import React, {Component} from 'react';
import InputOutline from 'react-native-input-outline';
import {Card} from 'react-native-elements';
import EmailStyle from './UserEmailStyle';
class UserEmail extends Component {
  render() {
    return (
      <View style={EmailStyle.userEmailHeader}>
        <Card containerStyle={EmailStyle.emailCard}>
          <View style={EmailStyle.userEmailView}>
            <Text style={EmailStyle.UserEmailinnerCardText}>UserEmail</Text>
          </View>
          <View>
            <InputOutline placeholder="Email" />
          </View>
        </Card>
      </View>
    );
  }
}
export default UserEmail;
