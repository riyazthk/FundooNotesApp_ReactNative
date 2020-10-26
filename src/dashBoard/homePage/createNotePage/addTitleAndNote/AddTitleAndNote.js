import {View, Text} from 'react-native';
import React, {Component} from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import {AddNotes} from '../../../../services/dataBaseController';
import HeaderOptions from '../../../homePage/createNotePage/headerOptions/HeaderOptions';
import {CallDataBase} from '../../../../IntermediateDataServices/CallDataBase';
class AddTitleAndNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        titleValue: '',
      },
      notes: {
        notesValue: '',
      },
    };
  }
  handleTitleValue = (title) => {
    this.setState({
      title: {
        titleValue: title,
      },
    });
    console.log(this.state.title.titleValue);
  };
  handleNoteValue = (notes) => {
    this.setState({
      notes: {
        notesValue: notes,
      },
    });
    // HeaderOptions(this.state.title.titleValue, this.state.notes.notesValue);
    CallDataBase(this.state.title.titleValue, this.state.notes.notesValue);
  };
  // handleSubmitData = () => {
  //   AddNotes(this.state.title.titleValue, this.state.notes.notesValue);
  // };
  render() {
    return (
      <View>
        <View style={AddTitleAndNoteStyle.title}>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1}}
            placeholder="title"
            onChangeText={(text) => this.handleTitleValue(text)}
            //value={value}
          />
        </View>
        <View style={AddTitleAndNoteStyle.note}>
          <TextInput
            style={{height: 40, borderColor: 'white', borderWidth: 1}}
            placeholder="note"
            onChangeText={(text) => this.handleNoteValue(text)}
          />
        </View>
      </View>
    );
  }
}
export default AddTitleAndNote;
