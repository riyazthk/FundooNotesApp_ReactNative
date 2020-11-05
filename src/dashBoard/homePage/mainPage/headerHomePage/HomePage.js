import {useNavigation} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Card} from 'react-native-elements';
import StatusBarView from '../../../statusBar/StatusBarView';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import ViewNotes from '../viewNotes/ViewNotes';
import homePageStyles from './homePageStyle';

const HomePage = ({navigation, route}) => {
  const {flag = undefined} = route.params ?? {};
  // const flags=flag.getParam
  const [changeViewNote, setChangeViewNote] = useState(false);
  //const [flag, setFlag] = useState(Math.random());
  console.log('view look ', flag);

  // const navigation = useNavigation();
  return (
    <View style={homePageStyles.body}>
      <View>
        <StatusBarView />
      </View>
      <View style={homePageStyles.searchNotes}>
        <SearchBarCard
          setChangeViewNote={setChangeViewNote}
          navigation={navigation}
        />
      </View>
      <View style={homePageStyles.ViewNote}>
        <ViewNotes changeViewNote={changeViewNote} flag={flag} />
      </View>
      <View>
        <FooterOptions />
      </View>
    </View>
  );
};

export default HomePage;
