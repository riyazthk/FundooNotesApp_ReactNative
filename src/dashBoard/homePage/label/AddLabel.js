import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getLabel} from '../../../services/noteService';
import {Image} from 'react-native-elements';
import createLabelStyle from './createLabelStyle';
import HeaderOptionStyle from '../createNotePage/headerOptions/HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {set} from 'react-native-reanimated';

const AddLabel = () => {
  const navigation = useNavigation();
  const [showLabel, setShowLabel] = useState([]);
  const [labelIndexValue, setLabelIndexValue] = useState();
  const [labels, setLabels] = useState('');
  const [flag, setFlag] = useState(Math.random());
  useEffect(() => {
    getLabel()
      .then((res) => {
        //setIsLoading(false);
        setShowLabel(res);
        console.log('key valuee', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  const handleLabelProcess = () => {
    navigation.navigate('createNotePage', {
      labels: labels,
      flag: flag,
      labelIndexValue: labelIndexValue,
    });
  };
  const handleLabelCheckBox = (labelValue, labelIndex) => {
    console.log('labels', labelValue.label, labelIndex);
    // setLabels([
    //   ...labels,
    //   {
    //     value: labelValue.label,
    //   },
    // ]);
    // console.log('object', Object.keys(labelValue).values);
    setLabels(labelValue.label);
    setLabelIndexValue(labelIndex);
    console.log('result label', showLabel);
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{height: 100, paddingTop: 40}}>
        <View style={HeaderOptionStyle.backOptions}>
          <TouchableOpacity onPress={() => handleLabelProcess()}>
            <Image
              source={require('../../../assets/back.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {showLabel.map((labelValue, labelIndex) => {
          return (
            <TouchableOpacity
              onPress={() => handleLabelCheckBox(labelValue, labelIndex)}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../../../assets/arrow.png')}
                  style={createLabelStyle.plusSymbol}
                />
                <View style={{width: '60%'}}>
                  <TextInput
                    //onChangeText={(text) => handleEditLabel(text)}
                    //value={labelValue.key}
                    value={labelValue.label}
                  />
                </View>
                {/* <Image
                source={require('../../../assets/edit.png')}
                style={createLabelStyle.plusSymbol}
              /> */}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default AddLabel;
