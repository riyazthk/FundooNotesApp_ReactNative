/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import AddTitleAndNoteStyle from './AddTitleAndNoteStyle';
import {TextInput} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import {Chip} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
function AddTitleAndNote(props,{
  setTitle,
  setDescription,
  title,
  description,
  noteIndex,
  color,
  dateTime,
  remainder,
  label,
  labels,
  checklabel,
}) {
  const navigation = useNavigation();
  console.log('labels', props.notesObject.label, props.notesObject.checklabel);
  const handleTitleValue = (text) => {
    props.notesObject.setTitle(text);
  };
  const handleNoteValue = (description) => {
    props.notesObject.setDescription(description);
  };
  return (
    <View>
      {props.notesObject.noteIndex === undefined ? (
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{height: 40, borderColor: props.notesObject.color, borderWidth: 1}}
              placeholder="title"
              onChangeText={(text) => handleTitleValue(text)}
              value={props.notesObject.title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{height: 40, borderColor: props.notesObject.color, borderWidth: 1}}
              placeholder="note"
              onChangeText={(text) => handleNoteValue(text)}
              value={props.notesObject.description}
            />
          </View>
          {props.notesObject.remainder === true && props.notesObject.dateTime !== '' ? (
            <View style={{width: '60%'}}>
              <RNChipView
                title={props.notesObject.dateTime}
                avatar={<Alarm name="alarm" size={20} />}
                avatarStyle={AddTitleAndNoteStyle.avatar}
              />
            </View>
          ) : null}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('addLabel', {
                label: props.notesObject.label,
                checklabel: props.notesObject.checklabel,
              })
            }>
            {props.notesObject.label !== '' ? <Chip style={{width: 50}}>{props.notesObject.label}</Chip> : null}
          </TouchableOpacity>
          {/* {label !== undefined ? <Chip>{label}</Chip> : null} */}
          {/* {labels !== undefined ? <Chip>{labels}</Chip> : null} */}
        </View>
      ) : (
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{
                height: 40,
                borderColor: props.notesObject.color,
                borderWidth: 1,
              }}
              placeholder="title"
              onChangeText={(text) => handleTitleValue(text)}
              value={props.notesObject.title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{
                height: 40,
                borderColor: props.notesObject.color,
                borderWidth: 1,
              }}
              placeholder="note"
              onChangeText={(text) => handleNoteValue(text)}
              value={props.notesObject.description}
            />
          </View>
          {props.notesObject.remainder === true && props.notesObject.dateTime !== '' ? (
            <View style={{width: '60%'}}>
              <RNChipView
                title={props.notesObject.dateTime}
                avatar={<Alarm name="alarm" size={20} />}
                avatarStyle={AddTitleAndNoteStyle.avatar}
              />
            </View>
          ) : null}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('addLabel', {
                label: props.notesObject.label,
                checklabel: props.notesObject.checklabel,
              })
            }>
            {props.notesObject.label !== '' ? (
              <Chip style={{width: 100, justifyContent: 'space-around'}}>
                {props.notesObject.label}
              </Chip>
            ) : null}
          </TouchableOpacity>
          {/* {label !== undefined ? <Chip>{label}</Chip> : null} */}
          {/* {labels !== undefined ? <Chip>{labels}</Chip> : null} */}
        </View>
      )}
    </View>
  );
}

export default AddTitleAndNote;
