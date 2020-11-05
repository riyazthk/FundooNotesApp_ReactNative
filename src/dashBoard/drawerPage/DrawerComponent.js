import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../homePage/mainPage/headerHomePage/HomePage';
import Remainder from '../homePage/remainder/Remainder';
import ArchieveNote from '../homePage/createNotePage/archieveNote/ArchieveNote';
import Delete from '../homePage/createNotePage/delete/RestorePage';
const Drawer = createDrawerNavigator();

function DrawerComponent({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="homePage">
      <Drawer.Screen name="homePage" component={HomePage} />
      <Drawer.Screen name="remainder" component={Remainder} />
      <Drawer.Screen name="archieveNote" component={ArchieveNote} />
      <Drawer.Screen name="delete" component={Delete} />
    </Drawer.Navigator>
  );
}
export default DrawerComponent;
