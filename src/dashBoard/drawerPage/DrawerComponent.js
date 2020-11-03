import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from '../homePage/mainPage/headerHomePage/HomePage';
import Remainder from '../homePage/remainder/Remainder';

const Drawer = createDrawerNavigator();

export default function navigationDrawer({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="homePage">
        <Drawer.Screen name="homePage" component={HomePage} />
        <Drawer.Screen name="remainder" component={Remainder} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
