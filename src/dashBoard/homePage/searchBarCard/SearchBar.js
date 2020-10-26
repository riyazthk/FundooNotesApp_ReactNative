import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import HeaderOptionStyle from '../createNotePage/headerOptions/HeaderOptionStyle';
import SearchBarStyle from './SearchBarStyle';
class SearchBarCard extends Component {
  render() {
    return (
      <View style={SearchBarStyle.headerOptions}>
        <View style={SearchBarStyle.menu}>
          <Image
            source={require('../../../assets/menu.png')}
            style={{height: 35, width: 35}}
          />
        </View>
        <View style={SearchBarStyle.search}>
          <Text style={SearchBarStyle.searchText}>Search Your Notes...</Text>
        </View>
        <View style={SearchBarStyle.list}>
          <Image
            source={require('../../../assets/list.png')}
            style={{height: 35, width: 35}}
          />
        </View>
        <View style={SearchBarStyle.loginbl}>
          <Image
            source={require('../../../assets/loginbl.png')}
            style={{height: 35, width: 35}}
          />
        </View>
      </View>
    );
  }
}
export default SearchBarCard;
