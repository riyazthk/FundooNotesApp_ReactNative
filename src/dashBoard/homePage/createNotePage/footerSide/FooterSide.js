import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FooterSideStyle from './FooterSideStyle';

class FooterSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={FooterSideStyle.footerComponent}>
          <View style={FooterSideStyle.addCircle}>
            <Icon name="add-circle-outline" size={30} />
          </View>
          <View style={FooterSideStyle.text}>
            <Text style={FooterSideStyle.footerText}>Edited 12:17</Text>
          </View>
          <View style={FooterSideStyle.ellipsis}>
            <Icon name="ellipsis-vertical-outline" size={30} />
          </View>
        </View>
      </View>
    );
  }
}
export default FooterSide;
