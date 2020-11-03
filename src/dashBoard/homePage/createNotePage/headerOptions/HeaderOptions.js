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

const HeaderOptions = ({setPin, pin, title, notes, color, index}) => {
  // const [title, setTitle] = useState(
  //   props.item !== undefined ? props.item.title : '',
  // );
  // const [notes, setNotes] = useState(
  //   props.item !== undefined ? props.item.notes : '',
  // );
  // const [pin, setPin] = useState(
  //   props.item !== undefined ? (props.item.pin === true ? false : true) : true,
  // );

  const handleBackToHomePage = () => {
    // AddNotes(title, notes);
    //CallDataBases(title, notes);
    console.log('check value ', title, notes, color, index, pin);
    if (index === undefined) {
      console.log('add notes');
      AddNotes(title, notes, color, pin);
    } else {
      console.log('edit notes');
      EditNotes(title, notes, index, color, pin);
    }
    navigation.navigate('homePage');
    //ViewNotes();
  };
  const handlePin = () => {
    console.log('pinned', pin);
    setPin(!pin);
    // callPinned(
    //   props.item.title,
    //   props.item.notes,
    //   props.index,
    //   props.item.color,
    //   pin,
    // );
    //callPinned(pin);
    console.log('after pin', pin);
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
      <View style={HeaderOptionStyle.archieve}>
        <Image
          source={require('../../../../assets/archive.png')}
          style={{height: 35, width: 35}}
        />
      </View>
    </View>
  );
};

export default HeaderOptions;
