import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderOptionStyle from './HeaderOptionStyle';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
class HeaderOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={HeaderOptionStyle.headerOptions}>
        <View style={HeaderOptionStyle.backOptions}>
          <Icon name="arrow-back-outline" size={30} color={'grey'} />
        </View>
        <View style={HeaderOptionStyle.pin}>
          <Icon name="pin-outline" size={30} color={'grey'} />
        </View>
        <View style={HeaderOptionStyle.remainder}>
          <Icon name="notifications-outline" size={30} color={'grey'} />
        </View>
        <View style={HeaderOptionStyle.archieve}>
          <Icon name="archive-outline" size={30} color={'grey'} />
        </View>
      </View>
    );
  }
}
export default HeaderOptions;
