import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getLabel} from '../../../services/noteService';
import {Image} from 'react-native-elements';
import createLabelStyle from './createLabelStyle';
import HeaderOptionStyle from '../createNotePage/headerOptions/HeaderOptionStyle';
import {useNavigation} from '@react-navigation/native';
import {set} from 'react-native-reanimated';

const AddLabel = ({route}) => {
  const {label = undefined, checklabel = undefined} = route.params ?? {};
  const navigation = useNavigation();
  const [showLabel, setShowLabel] = useState([]);
  const [labelIndexValue, setLabelIndexValue] = useState();
  //const [labels, setLabels] = useState(label !== undefined ? label : '');
  const [labels, setLabels] = useState('');
  const [labelValue, setLabelValue] = useState('');
  const [flag, setFlag] = useState(Math.random());
  const [checkLabelValue, setCheckLabelValue] = useState(
    checklabel !== undefined ? true : false,
  );
  console.log('label ', labels, checkLabelValue);
  useEffect(() => {
    if (label !== undefined) {
      setLabels(label);
    }
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
    console.log('check label', checkLabelValue, labels);
    navigation.navigate('createNotePage', {
      labels: labels,
      checkLabelValue: checkLabelValue,
      flag: flag,
      labelIndexValue: labelIndexValue,
    });
  };
  const handleLabelCheckBox = (labelValues, labelIndex) => {
    console.log('labels', labelValue.label, labelIndex, labels);
    // setLabels([
    //   ...labels,
    //   {
    //     value: labelValue.label,
    //   },
    // ]);
    // console.log('object', Object.keys(labelValue).values);
    if (labels === '') {
      setLabels(labelValues.label);
      setCheckLabelValue(!checkLabelValue);
      setLabelIndexValue(labelIndex);
    } else if (labels !== '') {
      setLabels('');
      setCheckLabelValue(!checkLabelValue);
      setLabelIndexValue(labelIndex);
    }

    //console.log('check', checkLabel);
    // console.log('result label', showLabel);
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
            <View>
              {checkLabelValue === false ? (
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
                    <Image
                      source={require('../../../assets/square.png')}
                      style={createLabelStyle.plusSymbol}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <View>
                  {labelIndexValue === labelIndex ? (
                    <TouchableOpacity
                      onPress={() =>
                        handleLabelCheckBox(labelValue, labelIndex)
                      }>
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
                        <Image
                          source={require('../../../assets/checkbox.png')}
                          style={createLabelStyle.plusSymbol}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        handleLabelCheckBox(labelValue, labelIndex)
                      }>
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
                        {labelValue.label === labels ? (
                          <Image
                            source={require('../../../assets/checkbox.png')}
                            style={createLabelStyle.plusSymbol}
                          />
                        ) : (
                          <Image
                            source={require('../../../assets/square.png')}
                            style={createLabelStyle.plusSymbol}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default AddLabel;
