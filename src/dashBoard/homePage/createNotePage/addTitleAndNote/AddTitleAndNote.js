import {View, Text} from 'react-native';
import React, {Component, useState} from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import HeaderOptions from '../../../homePage/createNotePage/headerOptions/HeaderOptions';
import {CallDataBase} from '../../../../IntermediateDataServices/CallDataBase';
import {set} from 'react-native-reanimated';

function AddTitleAndNote({setTitle, setNotes, title, notes, index, color}) {
  // console.log('value are', props.item.title, props.item.notes);
  // const [title, setTitles] = useState(
  //   props.item !== undefined ? props.item.title : '',
  // );
  // const [notes, setNotess] = useState(
  //   props.item !== undefined ? props.item.notes : '',
  // );
  console.log(title, notes, index);
  const handleTitleValue = (text) => {
    setTitle(text);
  };
  const handleNoteValue = (note) => {
    // console.log('boolean pin', props.pin);
    setNotes(note);
    // CallDataBase(title, notes, props.index);
  };
  return (
    <View>
      {index === undefined ? (
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{height: 40, borderColor: color, borderWidth: 1}}
              placeholder="title"
              onChangeText={(text) => handleTitleValue(text)}
              value={title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{height: 40, borderColor: color, borderWidth: 1}}
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
                borderColor: color,
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
                borderColor: color,
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
