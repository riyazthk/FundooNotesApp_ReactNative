import React, {Component} from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import RightBottomSheet from '../bottomSheetPage/RightBottomSheet';
import FooterSideStyle from './FooterSideStyle';

function FooterSide(props) {
  const [index, setIndex] = useState(props.index);
  return (
    <View>
      <View style={FooterSideStyle.footerComponent}>
        <View style={FooterSideStyle.addCircle}>
          <Image
            source={require('../../../../assets/extra.png')}
            style={{height: 35, width: 35}}
          />
        </View>
        <View style={FooterSideStyle.text}>
          <Text style={FooterSideStyle.footerText}>Edited 12:17</Text>
        </View>
        <View style={FooterSideStyle.ellipsis}>
          <RightBottomSheet index={index} />
        </View>
      </View>
    </View>
  );
}

export default FooterSide;
