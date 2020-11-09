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

const HeaderOptions = (props, {setPin, pin, index, archieve, setArchieve}) => {
  let archieves = false;
  const [flag] = useState(Math.random());
  const handleBackToHomePage = () => {
    console.log(
      'check value ',
      props.title,
      props.description,
      props.color,
      props.noteIndex,
      props.pin,
      'label',
      props.label,
      props.labelIndex,
    );
    if (
      props.noteIndex === undefined &&
      props.title !== '' &&
      props.description !== ''
    ) {
      console.log('add notes');
      if (props.labels !== undefined) {
        props.setLabel = props.labels;
        console.log('label ', props.label);
      }
      addNotes(
        props.title,
        props.description,
        props.color,
        props.pin,
        archieves,
        props.deleteNote,
        props.dateTime,
        props.label,
      );
      if (
        props.label !== '' &&
        props.label !== undefined &&
        props.labelIndex !== undefined
      ) {
        updateLabel(
          props.title,
          props.description,
          props.color,
          props.pin,
          archieves,
          props.deleteNote,
          props.dateTime,
          props.label,
          props.labelIndex,
        );
      }
      navigation.navigate('home', {flag: flag});
    } else if (props.title !== '' && props.description !== '') {
      console.log('edit notes');

      editNotes(
        props.title,
        props.description,
        props.noteIndex,
        props.color,
        props.pin,
        archieves,
        props.deleteNote,
        props.dateTime,
        props.label,
      );
      if (
        props.label !== '' &&
        props.label !== undefined &&
        props.labelIndex !== undefined
      ) {
        updateLabel(
          props.title,
          props.description,
          props.color,
          props.pin,
          archieves,
          props.deleteNote,
          props.dateTime,
          props.label,
          props.labelIndex,
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
    props.setPin(!props.pin);
  };
  const handleArchieve = () => {
    console.log('entry', props.archieve);
    if (props.archieve === false) {
      archieves = true;
      props.setArchieve(true);
      console.log('enter', props.archieve);
      handleBackToHomePage();
    } else {
      console.log('else');
      props.setArchieve(false);
      console.log('enter', props.archieve);
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
      {props.pin === false ? (
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
          setRemainder={props.setRemainder}
          setDateTime={props.setDateTime}
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
