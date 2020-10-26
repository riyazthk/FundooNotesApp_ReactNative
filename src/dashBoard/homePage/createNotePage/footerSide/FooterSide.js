import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
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
            <Image
              source={require('../../../../assets/extra.png')}
              style={{height: 35, width: 35}}
            />
          </View>
          <View style={FooterSideStyle.text}>
            <Text style={FooterSideStyle.footerText}>Edited 12:17</Text>
          </View>
          <View style={FooterSideStyle.ellipsis}>
            <Image
              source={require('../../../../assets/more.png')}
              style={{height: 35, width: 35}}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default FooterSide;
