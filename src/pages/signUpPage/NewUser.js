import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import InputOutline from 'react-native-input-outline';
import newUserStyles from './NewUserStyle';

class NewUser extends Component {
  render() {
    return (
      <View style={newUserStyles.newUserHeader}>
        <View>
          <Text style={newUserStyles.newUserTitle}>SignUp</Text>
          <Card containerStyle={newUserStyles.newUserCard}>
            <ScrollView>
              <View style={newUserStyles.newUserFirstName}>
                <InputOutline placeholder="firstName" />
              </View>
              <View style={newUserStyles.newUserLastName}>
                <InputOutline placeholder="lastName" />
              </View>
              <View style={newUserStyles.newUserEmail}>
                <InputOutline placeholder="Email" />
              </View>
              <View style={newUserStyles.newUserPassword}>
                <InputOutline placeholder="password" />
              </View>
              <View style={newUserStyles.newUserConfirmPassword}>
                <InputOutline placeholder="confirmPassword" />
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
