import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import StatusBarView from '../../../statusBar/StatusBarView';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import ViewNotes from '../viewNotes/ViewNotes';
import homePageStyles from './homePageStyle';

const HomePage = () => {
  const [changeViewNote, setChangeViewNote] = useState(false);
  console.log('view look ', changeViewNote);
  return (
    <View style={homePageStyles.body}>
      <View>
        <StatusBarView />
      </View>
      <View style={homePageStyles.searchNotes}>
        <SearchBarCard setChangeViewNote={setChangeViewNote} />
      </View>
      <View style={homePageStyles.ViewNote}>
        <ViewNotes changeViewNote={changeViewNote} />
      </View>
      <View>
        <FooterOptions />
      </View>
    </View>
  );
};

export default HomePage;
