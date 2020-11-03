import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import HeaderOptionStyle from './HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {
  CallDataBases,
  callPinned,
} from '../../../../IntermediateDataServices/CallDataBase';
import {AddNotes, EditNotes} from '../../../../services/noteService';

const HeaderOptions = ({
  setPin,
  pin,
  title,
  notes,
  color,
  index,
  setArchieve,
}) => {
  let archieve = false;
  const handleBackToHomePage = () => {
    console.log('check value ', title, notes, color, index, pin);
    if (index === undefined) {
      console.log('add notes');
      AddNotes(title, notes, color, pin, archieve);
    } else {
      console.log('edit notes');
      EditNotes(title, notes, index, color, pin, archieve);
    }
    navigation.navigate('homePage');
  };
  const handlePin = () => {
    setPin(!pin);
  };
  const handleArchieve = () => {
    console.log('archieve value', archieve);
    console.log('setarchieve value', setArchieve);
    setArchieve(!archieve);
    archieve = true;
    handleBackToHomePage();

    console.log('after archieve value', archieve);
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
      {pin === false ? (
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
        <Image
          source={require('../../../../assets/reminderplus.png')}
          style={{height: 35, width: 35}}
        />
      </View>
      <TouchableOpacity onPress={() => handleArchieve()}>
        <View style={HeaderOptionStyle.archieve}>
          <Image
            source={require('../../../../assets/archive.png')}
            style={{height: 35, width: 35}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderOptions;
