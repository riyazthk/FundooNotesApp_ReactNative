import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import HeaderOptionStyle from './HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {
  CallDataBases,
  callPinned,
} from '../../../../IntermediateDataServices/CallDataBase';
import {AddNotes, EditNotes} from '../../../../services/noteService';
import Remainder from '../remainder/Remainder';

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
  const [flag, setFlag] = useState(Math.random());
  const handleBackToHomePage = () => {
    console.log('check value ', title, notes, color, index, pin);
    if (index === undefined) {
      console.log('add notes');
      AddNotes(title, notes, color, pin, archieve);
    } else {
      console.log('edit notes');
      EditNotes(title, notes, index, color, pin, archieve);
    }
    navigation.navigate('homePage', {flag: flag});
  };
  const handlePin = () => {
    setPin(!pin);
  };
  const handleArchieve = () => {
    if (setArchieve === false) {
      //setArchieve(!archieve);
      archieve = true;
      handleBackToHomePage();
    } else {
      archieve = false;
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
        <Remainder />
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
