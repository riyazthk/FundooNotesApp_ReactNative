import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AddTitleAndNote from '../addTitleAndNote/AddTitleAndNote';
import FooterSide from '../footerSide/FooterSide';
import HeaderOptions from '../headerOptions/HeaderOptions';
import CreateNoteStyles from './CreateNotePageStyle';

class CreateNotePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={CreateNoteStyles.header}>
        <View style={CreateNoteStyles.headerOptions}>
          <HeaderOptions />
        </View>
        <View style={CreateNoteStyles.body}>
          <AddTitleAndNote />
        </View>
        <View style={CreateNoteStyles.footer}>
          <FooterSide />
        </View>
      </View>
    );
  }
}
export default CreateNotePage;
