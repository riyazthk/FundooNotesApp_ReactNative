import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import HeaderOptionStyle from './HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {
  CallDataBases,
  callPinned,
} from '../../../../IntermediateDataServices/CallDataBase';
import {
  AddNotes,
  DeleteNotes,
  EditNotes,
  GetNotes,
} from '../../../../services/noteService';
import Remainder from '../remainder/Remainder';
// import ViewNotes from '../../mainPage/viewNotes/ViewNotes';

const HeaderOptions = (props, {setPin, pin, index, archieve, setArchieve}) => {
  let archieves = false;
  const [flag, setFlag] = useState(Math.random());
  const handleBackToHomePage = () => {
    console.log(
      'check value ',
      props.title,
      props.notes,
      props.color,
      props.index,
      props.pin,
    );
    if (props.index === undefined) {
      console.log('add notes');
      // setFlag(Math.random());
      AddNotes(
        props.title,
        props.notes,
        props.color,
        props.pin,
        archieves,
        props.deleteNote,
        props.dateTime,
      );
    } else {
      console.log('edit notes');
      //setFlag(Math.random());
      EditNotes(
        props.title,
        props.notes,
        props.index,
        props.color,
        props.pin,
        archieves,
        props.deleteNote,
        props.dateTime,
      );
    }
    console.log('get flag value', flag);
    navigation.navigate('homePage', {flag: flag});
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
      //archieves = false;
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
