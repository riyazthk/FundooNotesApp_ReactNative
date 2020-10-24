import Drawer from 'react-native-drawer';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DrawerComponent extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    return (
      <View>
        <Drawer
          ref={(ref) => (this._drawer = ref)}
          // content={ }
        />
      </View>
    );
  }
}
