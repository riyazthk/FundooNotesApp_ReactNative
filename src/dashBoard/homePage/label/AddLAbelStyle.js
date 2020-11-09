import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getLabel} from '../../../services/noteService';
import {Image} from 'react-native-elements';
import createLabelStyle from './createLabelStyle';

const AddLabel = () => {
  const [showLabel, setShowLabel] = useState([]);
  useEffect(() => {
    getLabel()
      .then((res) => {
        //setIsLoading(false);
        setShowLabel(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <View>
      {showLabel.map((labelValue, labelIndex) => {
        return (
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/arrow.png')}
              style={createLabelStyle.plusSymbol}
            />
            <View style={{width: '60%'}}>
              <TextInput
                //onChangeText={(text) => handleEditLabel(text)}
                value={labelValue.label}
              />
            </View>
            <Image
              source={require('../../../assets/edit.png')}
              style={createLabelStyle.plusSymbol}
            />
          </View>
        );
      })}
    </View>
  );
};
export default AddLabel;
