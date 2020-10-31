import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import HeaderOptionStyle from './HeaderOptionStyle';
// import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {useNavigation} from '@react-navigation/native';
// import {AddNotes, GetNotes} from '../../../../services/dataBaseController';
import {CallDataBases} from '../../../../IntermediateDataServices/CallDataBase';
// import ViewNotes from '../../mainPage/viewNotes/ViewNotes';
function HeaderOptions() {
  const handleBackToHomePage = () => {
    // AddNotes(title, notes);
    CallDataBases();
    navigation.navigate('homePage');
    //ViewNotes();
  };
  const navigation = useNavigation();
  return (
    <View style={HeaderOptionStyle.headerOptions}>
      <View style={HeaderOptionStyle.backOptions}>
        <TouchableOpacity onPress={() => handleBackToHomePage()}>
          <Image
            source={require('../../../../assets/back.png')}
            style={{height: 35, width: 35}}
          />
        </TouchableOpacity>
      </View>
      <View style={HeaderOptionStyle.pin}>
        <Image
          source={require('../../../../assets/pin.png')}
          style={{height: 35, width: 35}}
        />
      </View>
      <View style={HeaderOptionStyle.remainder}>
        <Image
          source={require('../../../../assets/reminderplus.png')}
          style={{height: 35, width: 35}}
        />
      </View>
      <View style={HeaderOptionStyle.archieve}>
        <Image
          source={require('../../../../assets/archive.png')}
          style={{height: 35, width: 35}}
        />
      </View>
    </View>
  );
}

export default HeaderOptions;
