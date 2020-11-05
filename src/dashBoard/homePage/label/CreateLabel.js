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
  const editLabel = () => {
    setEditLabels(!editLabels);
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
      <View style={{height: '80%'}}>
        {showLabel.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => editLabel()}
              style={{backgroundColor: 'white'}}>
              <View
                style={{
                  flexDirection: 'row',
                  background: 'red',
                  width: '100%',
                  height: 70,
                  //justifyContent: 'space-around',
                  paddingTop: 5,
                }}>
                <View style={{width: '25%'}}>
                  {editLabels === false ? (
                    <Image
                      source={require('../../../assets/arrow.png')}
                      style={createLabelStyle.plusSymbol}
                    />
                  ) : (
                    <TouchableOpacity>
                      <Image
                        source={require('../../../assets/trash.png')}
                        style={createLabelStyle.plusSymbol}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{width: '60%'}}>
                  <TextInput
                    // style={{height: 40, borderColor: color, borderWidth: 1}}
                    // placeholder="title"
                    onChangeText={(text) => handleEditLabel(text)}
                    value={item.label}
                  />
                </View>
                {editLabels === false ? (
                  <Image
                    source={require('../../../assets/edit.png')}
                    style={createLabelStyle.plusSymbol}
                  />
                ) : (
                  <TouchableOpacity>
                    <Image
                      source={require('../../../assets/tick1.png')}
                      style={createLabelStyle.plusSymbol}
                    />
                  </TouchableOpacity>
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
