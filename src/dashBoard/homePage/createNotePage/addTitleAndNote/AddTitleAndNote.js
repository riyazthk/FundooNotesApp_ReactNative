import {View, Text} from 'react-native';
import React, {Component} from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
class AddTitleAndNote extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={AddTitleAndNoteStyle.title}>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1}}
            placeholder="title"
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
          />
        </View>
        <View style={AddTitleAndNoteStyle.note}>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1}}
            placeholder="note"
          />
        </View>
      </View>
    );
  }
}
export default AddTitleAndNote;
