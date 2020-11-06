/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
function AddTitleAndNote({
  setTitle,
  setDescription,
  title,
  description,
  noteIndex,
  color,
  dateTime,
  remainder,
}) {
  const handleTitleValue = (text) => {
    setTitle(text);
  };
  const handleNoteValue = (description) => {
    setDescription(description);
  };
  return (
    <View>
      {noteIndex === undefined ? (
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
              value={description}
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
              value={description}
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
