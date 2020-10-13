import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import InputOutline from 'react-native-input-outline';
import newUserStyles from './NewUserStyle';
import {TextField, FilledTextField} from 'react-native-material-textfield';
class NewUser extends Component {
  render() {
    return (
      <View style={newUserStyles.newUserHeader}>
        <View>
          <Text style={newUserStyles.newUserTitle}>SignUp</Text>
          <Card containerStyle={newUserStyles.newUserCard}>
            <ScrollView>
              <View style={newUserStyles.newUserFirstName}>
                <TextField placeholder="firstName" />
              </View>
              <View style={newUserStyles.newUserLastName}>
                <TextField placeholder="lastName" />
              </View>
              <View style={newUserStyles.newUserEmail}>
                <TextField placeholder="Email" />
              </View>
              <View style={newUserStyles.newUserPassword}>
                <TextField placeholder="password" />
              </View>
              <View style={newUserStyles.newUserConfirmPassword}>
                <TextField placeholder="confirmPassword" />
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
