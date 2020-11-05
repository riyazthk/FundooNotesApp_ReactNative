import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../homePage/mainPage/headerHomePage/HomePage';
import Remainder from '../homePage/remainder/Remainder';
import Delete from '../homePage/createNotePage/delete/RestorePage';
import ArchieveNote from '../homePage/mainPage/archieveNote/ArchieveNote';
const Drawer = createDrawerNavigator();

function DrawerComponent({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="homePage">
      <Drawer.Screen name="home" component={HomePage} />
      <Drawer.Screen name="remainder" component={Remainder} />
      <Drawer.Screen name="archieveNote" component={ArchieveNote} />
      <Drawer.Screen name="delete" component={Delete} />
      {/* <Drawer.Screen name="label" component={createNewLabel} /> */}
    </Drawer.Navigator>
  );
}
export default DrawerComponent;
