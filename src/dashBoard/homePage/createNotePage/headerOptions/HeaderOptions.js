/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import HeaderOptionStyle from './HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {
  addNotes,
  editNotes,
  updateLabel,
} from '../../../../services/noteService';
import Remainder from '../remainder/Remainder';
import Snackbar from 'react-native-snackbar';

const HeaderOptions = (props) => {
  let archieves = false;
  const [flag] = useState(Math.random());
  const handleBackToHomePage = () => {
    console.log(
      'check value ',
      props.notesObject.title,
      props.notesObject.description,
      props.notesObject.color,
      props.notesObject.noteIndex,
      props.notesObject.pin,
      'label',
      props.notesObject.label,
      props.notesObject.labelIndex,
      'check label',
      props.notesObject.checklabel,
    );
    if (
      props.notesObject.noteIndex === undefined &&
      props.notesObject.title !== '' &&
      props.notesObject.description !== ''
    ) {
      console.log('add notes');
      if (props.notesObject.labels !== undefined) {
        props.notesObject.setLabel = props.labels;
        // props.setCheckLabel=props.checkLabel
        console.log('label ', props.label);
      }
      addNotes(
        props.notesObject.title,
        props.notesObject.description,
        props.notesObject.color,
        props.notesObject.pin,
        archieves,
        props.notesObject.deleteNote,
        props.notesObject.dateTime,
        props.notesObject.label,
        props.notesObject.checklabel,
      );
      if (
        props.notesObject.label !== '' &&
        props.notesObject.label !== undefined &&
        props.notesObject.labelIndex !== undefined
      ) {
        updateLabel(
          props.notesObject.title,
          props.notesObject.description,
          props.notesObject.color,
          props.notesObject.pin,
          archieves,
          props.notesObject.deleteNote,
          props.notesObject.dateTime,
          props.notesObject.label,
          props.notesObject.labelIndex,
        );
      }
      navigation.navigate('home', {flag: flag});
    } else if (
      props.notesObject.title !== '' &&
      props.notesObject.description !== ''
    ) {
      console.log('edit notes');

      editNotes(
        props.notesObject.title,
        props.notesObject.description,
        props.notesObject.noteIndex,
        props.notesObject.color,
        props.notesObject.pin,
        archieves,
        props.notesObject.deleteNote,
        props.notesObject.dateTime,
        props.notesObject.label,
        props.notesObject.checklabel,
      );
      if (
        props.notesObject.label !== '' &&
        props.notesObject.label !== undefined &&
        props.notesObject.labelIndex !== undefined
      ) {
        updateLabel(
          props.notesObject.title,
          props.notesObject.description,
          props.notesObject.color,
          props.notesObject.pin,
          archieves,
          props.notesObject.deleteNote,
          props.notesObject.dateTime,
          props.notesObject.label,
          props.notesObject.labelIndex,
        );
      }
      navigation.navigate('home', {flag: flag});
    } else {
      Snackbar.show({
        text: 'title and notes not be an empty',
        duration: Snackbar.LENGTH_SHORT,
      });
      navigation.navigate('home', {flag: flag});
    }
    // console.log('get flag value', flag);
  };
  const handlePin = () => {
    props.notesObject.setPin(!props.notesObject.pin);
  };
  const handleArchieve = () => {
    console.log('entry', props.notesObject.archieve);
    if (props.notesObject.archieve === false) {
      archieves = true;
      props.notesObject.setArchieve(true);
      console.log('enter', props.notesObject.archieve);
      handleBackToHomePage();
    } else {
      console.log('else');
      props.notesObject.setArchieve(false);
      console.log('enter', props.notesObject.archieve);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={HeaderOptionStyle.headerOptions}>
      <View style={HeaderOptionStyle.backOptions}>
        <TouchableOpacity onPress={() => handleBackToHomePage()}>
          <Image
            source={require('../../../../assets/back.png')}
            style={{height: 35, width: 35}}
          />
        </TouchableOpacity>
      </View>
      {props.notesObject.pin === false ? (
        <View style={HeaderOptionStyle.pin}>
          <TouchableOpacity onPress={() => handlePin()}>
            <Image
              source={require('../../../../assets/pin.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={HeaderOptionStyle.pin}>
          <TouchableOpacity onPress={() => handlePin()}>
            <Image
              source={require('../../../../assets/fillpin.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={HeaderOptionStyle.remainder}>
        <Remainder
          setRemainder={props.notesObject.setRemainder}
          setDateTime={props.notesObject.setDateTime}
        />
      </View>
      <View style={HeaderOptionStyle.archieve}>
        <TouchableOpacity onPress={() => handleArchieve()}>
          <Image
            source={require('../../../../assets/archive.png')}
            style={{height: 35, width: 35}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderOptions;
