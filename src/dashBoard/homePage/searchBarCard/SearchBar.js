import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import HeaderOptionStyle from '../createNotePage/headerOptions/HeaderOptionStyle';
import SearchBarStyle from './SearchBarStyle';
function SearchBarCard({setChangeViewNote, navigation}) {
  // const navigation = useNavigation();
  const [gridView, setGridView] = useState(false);
  const handleViewNotes = () => {
    setGridView(!gridView);
    setChangeViewNote(gridView);
  };
  return (
    <Card containerStyle={SearchBarStyle.titleCard}>
      <View style={SearchBarStyle.searchBar}>
        <View style={SearchBarStyle.headerOptions}>
          <View style={SearchBarStyle.menu}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/menu.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>
          <View style={SearchBarStyle.search}>
            <Text style={SearchBarStyle.searchText}>Search Your Notes...</Text>
          </View>

          <TouchableOpacity
            onPress={() => handleViewNotes()}
            style={SearchBarStyle.styleImage}>
            <Image
              source={require('../../../assets/lis.png')}
              style={SearchBarStyle.styleImage}
              //
            />

            {/* </View> */}
          </TouchableOpacity>

          {/* </View> */}
          {/* </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('createNotePage')}>
            <View style={SearchBarStyle.loginbl}>
              <Image
                source={require('../../../assets/loginbl.png')}
                style={{height: 35, width: 35}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );
}

export default SearchBarCard;
