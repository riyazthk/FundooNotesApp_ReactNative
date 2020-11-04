import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Image} from 'react-native-elements';
const Remainder = () => {
  const handleRemainder = () => {
    return (
      <View>
        <Text>txt</Text>
      </View>
    );
  };
  return (
    <TouchableOpacity onPress={() => handleRemainder()}>
      <Image
        source={require('../../../../assets/reminderplus.png')}
        style={{height: 35, width: 35}}
      />
    </TouchableOpacity>
  );
};
export default Remainder;
