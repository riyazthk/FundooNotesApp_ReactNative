import {View, Text} from 'react-native';
import React, {Component, useState} from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import HeaderOptions from '../../../homePage/createNotePage/headerOptions/HeaderOptions';
import {CallDataBase} from '../../../../IntermediateDataServices/CallDataBase';

function AddTitleAndNote(props) {
  const [title, setTitle] = useState(
    props.item !== undefined ? props.item.title : '',
  );
  const [notes, setNotes] = useState(
    props.item !== undefined ? props.item.notes : '',
  );

  const handleTitleValue = (text) => {
    setTitle(text);
  };
  const handleNoteValue = (notes) => {
    setNotes(notes);
    CallDataBase(title, notes, props.index);
  };
  return (
    <View>
      {props.index === undefined ? (
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{height: 40, borderColor: props.color, borderWidth: 1}}
              placeholder="title"
              onChangeText={(text) => handleTitleValue(text)}
              value={title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{height: 40, borderColor: props.color, borderWidth: 1}}
              placeholder="note"
              onChangeText={(text) => handleNoteValue(text)}
              value={notes}
            />
          </View>
        </View>
      ) : (
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{
                height: 40,
                borderColor: props.item.color,
                borderWidth: 1,
              }}
              placeholder="title"
              onChangeText={(text) => handleTitleValue(text)}
              value={title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{
                height: 40,
                borderColor: props.item.color,
                borderWidth: 1,
              }}
              placeholder="note"
              onChangeText={(text) => handleNoteValue(text)}
              value={notes}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default AddTitleAndNote;
