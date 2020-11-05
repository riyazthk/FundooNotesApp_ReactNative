/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Button} from 'react-native';
import {Image} from 'react-native-elements';
import Modal from 'react-native-modal';
import Calendar from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/Ionicons';
import DateAndTimePicker from '@react-native-community/datetimepicker';
import remainderStyle from './remainderStyle';
const Remainder = ({setRemainder, setDateTime}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [mode, setMode] = useState('date');
  console.log('checking', setRemainder);
  const showDate = () => {
    setMode('date');
    setDateVisible(!dateVisible);
  };
  const showTime = () => {
    setMode('time');
    setDateVisible(!dateVisible);
  };
  const handleRemainder = () => {
    setModalVisible(!modalVisible);
    setRemainder(true);
  };

  const dateAndTime = (event, selectedDate) => {
    if (mode === 'date') {
      let currentDate = new Date(selectedDate).toLocaleDateString();
      setDate(currentDate);
    } else {
      let currentTime = new Date(selectedDate).toLocaleTimeString();
      setTime(currentTime);
    }
    setDateTime(date + ',' + time);
    setDateVisible(!dateVisible);
  };
  const hideDateAndTime = () => {
    setDateVisible(!dateVisible);
  };
  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <View>
        {modalVisible === false ? (
          <TouchableOpacity onPress={() => handleRemainder()}>
            <Image
              source={require('../../../../assets/reminderplus.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        ) : (
          <View>
            <Modal transparent={true} isVisible={true}>
              {/* {dateVisible === false ? ( */}
              <View
                style={{
                  height: '30%',
                  width: '80%',
                  backgroundColor: 'white',
                  justifyContent: 'space-around',
                }}>
                <View style={{alignItems: 'center'}}>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      placeholder={date}
                      style={remainderStyle.modalInput}
                      underlineColorAndroid="black"
                      editable={false}
                      value={date}
                    />
                    <TouchableOpacity onPress={() => showDate()}>
                      <Calendar name="calendar" size={25} />
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      placeholder={time}
                      style={remainderStyle.modalInput}
                      underlineColorAndroid="black"
                      editable={false}
                      value={time}
                    />
                    <TouchableOpacity onPress={() => showTime()}>
                      <Time name="time-outline" size={29} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '25%', margin: 5}}>
                      <Button
                        onPress={() => handleModal()}
                        title="save"
                        color="#841584"
                      />
                    </View>
                    <View style={{width: '25%', margin: 5}}>
                      <Button
                        onPress={() => handleModal()}
                        title="cancel"
                        color="#841584"
                      />
                    </View>
                  </View>
                </View>
              </View>
              {/* ) : ( */}

              {/* )} */}
            </Modal>
          </View>
          // <View>
          //   <Text>hello</Text>
          // </View>
        )}
      </View>
      <View>
        {dateVisible && (
          <View>
            <DateAndTimePicker
              value={new Date()}
              mode={mode}
              is24Hour={false}
              onCancel={hideDateAndTime}
              onChange={dateAndTime}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Remainder;
