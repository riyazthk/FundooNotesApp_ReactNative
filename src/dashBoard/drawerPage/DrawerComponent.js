import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../homePage/mainPage/headerHomePage/HomePage';
import Remainder from '../homePage/remainder/Remainder';
import ArchieveNote from '../homePage/mainPage/archieveNote/ArchieveNote';
import CreateLabel from '../homePage/label/CreateLabel';
import Delete from '../homePage/createNotePage/delete/Delete';
const Drawer = createDrawerNavigator();

function DrawerComponent({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="homePage">
      <Drawer.Screen name="home" component={HomePage} />
      <Drawer.Screen name="remainder" component={Remainder} />
      <Drawer.Screen name="archieveNote" component={ArchieveNote} />
      <Drawer.Screen name="delete" component={Delete} />
      <Drawer.Screen name="label" component={CreateLabel} />
    </Drawer.Navigator>
  );
}
export default DrawerComponent;
