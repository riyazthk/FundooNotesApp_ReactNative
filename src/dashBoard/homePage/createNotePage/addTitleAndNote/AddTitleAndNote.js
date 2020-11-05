import {View, Text} from 'react-native';
import React, {Component, useState} from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import HeaderOptions from '../../../homePage/createNotePage/headerOptions/HeaderOptions';
import {CallDataBase} from '../../../../IntermediateDataServices/CallDataBase';
import {set} from 'react-native-reanimated';
import {RNChipView} from 'react-native-chip-view';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
function AddTitleAndNote({
  setTitle,
  setNotes,
  title,
  notes,
  index,
  color,
  dateTime,
  remainder,
}) {
  // console.log(title, notes, index, 'remainder', remainder);
  const handleTitleValue = (text) => {
    setTitle(text);
  };
  const handleNoteValue = (note) => {
    setNotes(note);
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
          {remainder === true && dateTime !== '' ? (
            <View style={{width: '60%'}}>
              <RNChipView
                title={dateTime}
                avatar={<Alarm name="alarm" size={20} />}
                avatarStyle={AddTitleAndNoteStyle.avatar}
              />
            </View>
          ) : null}
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
          {remainder === true && dateTime !== '' ? (
            <View style={{width: '60%'}}>
              <RNChipView
                title={dateTime}
                avatar={<Alarm name="alarm" size={20} />}
                avatarStyle={AddTitleAndNoteStyle.avatar}
              />
            </View>
          ) : null}
        </View>
      )}
    </View>
  );
}

export default AddTitleAndNote;
