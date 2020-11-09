/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Image} from 'react-native-elements';
import SearchBarStyle from '../searchBarCard/SearchBarStyle';
import createLabelStyle from './createLabelStyle';
import {addLabel, getLabel} from '../../../services/noteService';
const CreateLabel = ({navigation}) => {
  const [createLabels, setCreateLabels] = useState(false);
  const [label, setLabel] = useState('');
  const [showLabel, setShowLabel] = useState([]);
  const [editLabels, setEditLabels] = useState(false);
  const [showClickLabel, setShowClickLabel] = useState(false);
  const [labelIndex, setLabelIndex] = useState();
  useEffect(() => {
    getLabel()
      .then((res) => {
        //setIsLoading(false);
        setShowLabel(res);
        console.log('label valueee', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  const handleClickLabel = () => {
    setCreateLabels(!createLabels);
  };
  const handleLable = (text) => {
    setLabel(text);
  };
  const handleLabelToDb = async () => {
    let response = await addLabel(label);
    console.log('response label', response);
  };
  const editLabel = (labelValue, labelIndex) => {
    console.log('label index', labelIndex);
    setEditLabels(!editLabels);
    setLabelIndex(labelIndex);
  };
  const handleEditLabel = (text) => {
    setLabel(text);
  };
  return (
    <View
      style={{
        paddingTop: 30,
        paddingLeft: 15,
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View style={SearchBarStyle.menu}>
          <TouchableOpacity
            style={{backgroundColor: 'white'}}
            onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../../assets/menu.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '55%'}}>
          <Text style={{fontSize: 28}}>Label</Text>
        </View>
      </View>
      <TouchableOpacity
        style={createLabelStyle.styleTouchable}
        onPress={() => handleClickLabel()}>
        <View
          style={{
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 10,
            borderColor: createLabels === false ? ' white' : 'grey',
          }}>
          <View style={createLabelStyle.styleBodyLabel}>
            <Image
              source={
                createLabels === false
                  ? require('../../../assets/plus2.png')
                  : require('../../../assets/close.png')
              }
              style={createLabelStyle.plusSymbol}
            />
          </View>
          <View style={{width: '65%'}}>
            <TextInput
              placeholder="Create New Label"
              style={createLabelStyle.modalInput}
              value={label}
              onChangeText={(text) => handleLable(text)}
            />
          </View>
          <View style={createLabelStyle.styleBodyLabel}>
            {createLabels === false ? null : (
              <TouchableOpacity onPress={() => handleLabelToDb()}>
                <Image
                  source={require('../../../assets/tick1.png')}
                  style={createLabelStyle.plusSymbol}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View style={{height: '80%', width: '100%'}}>
        {showLabel.map((labelValue, labelIndexValue) => {
          return (
            <TouchableOpacity
              onPress={() => editLabel(labelValue, labelIndexValue)}
              style={{backgroundColor: 'white'}}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingTop: 5,
                }}>
                {editLabels === false ? (
                  <View flexDirection="row">
                    <Image
                      source={require('../../../assets/arrow.png')}
                      style={createLabelStyle.plusSymbol}
                    />
                    <View style={{width: '60%'}}>
                      <TextInput
                        onChangeText={(text) => handleEditLabel(text)}
                        value={labelValue}
                      />
                    </View>
                    <Image
                      source={require('../../../assets/edit.png')}
                      style={createLabelStyle.plusSymbol}
                    />
                  </View>
                ) : (
                  <View>
                    {labelIndex === labelIndexValue ? (
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../../assets/trash.png')}
                          style={createLabelStyle.plusSymbol}
                        />
                        <View style={{width: '60%'}}>
                          <TextInput
                            onChangeText={(text) => handleEditLabel(text)}
                            value={labelValue}
                          />
                        </View>
                        <Image
                          source={require('../../../assets/tick1.png')}
                          style={createLabelStyle.plusSymbol}
                        />
                      </View>
                    ) : (
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../../assets/arrow.png')}
                          style={createLabelStyle.plusSymbol}
                        />
                        <View style={{width: '60%'}}>
                          <TextInput
                            onChangeText={(text) => handleEditLabel(text)}
                            value={labelValue}
                          />
                        </View>
                        <Image
                          source={require('../../../assets/edit.png')}
                          style={createLabelStyle.plusSymbol}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default CreateLabel;
