import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import ResetPasswordStyle from './ResetPassworsStyle';
import InputOutline from 'react-native-input-outline';
class ResetPassword extends Component {
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
              <InputOutline placeholder="password" />
            </View>
            <View style={ResetPasswordStyle.resetReEnterPassword}>
              <InputOutline placeholder="re-enter password" />
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
