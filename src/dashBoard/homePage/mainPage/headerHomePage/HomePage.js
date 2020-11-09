import React, {useState} from 'react';
import {View} from 'react-native';
import StatusBarView from '../../../statusBar/StatusBarView';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import ViewNotes from '../viewNotes/ViewNotes';
import homePageStyles from './homePageStyle';

const HomePage = ({navigation, route}) => {
  const {flag = undefined} = route.params ?? {};
  // const flags=flag.getParam
  const [changeViewNote, setChangeViewNote] = useState(false);
  console.log('view look ', flag);
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
      <View style={{height: '8%'}}>
        <FooterOptions />
      </View>
    </View>
  );
};

export default HomePage;
