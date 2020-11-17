import React, {useState} from 'react';
import {View} from 'react-native';
import StatusBarView from '../../../statusBar/StatusBarView';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import ViewNotes from '../viewNotes/ViewNotes';
import homePageStyles from './homePageStyle';

const HomePage = ({navigation, route}) => {
  const {flag = 0, labelValue = ''} = route.params ?? {};
  // const flags=flag.getParam
  console.log('labelVAlue', labelValue.label);
  const [changeViewNote, setChangeViewNote] = useState(false);
  const [searchNote, setSearchNote] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  console.log('view look ', flag);
  return (
    <View>
      <View>
        <StatusBarView />
      </View>
      <View style={homePageStyles.body}>
        <View style={homePageStyles.searchNotes}>
          <SearchBarCard
            setChangeViewNote={setChangeViewNote}
            navigation={navigation}
            setSearchNote={setSearchNote}
            searchNote={searchNote}
            setFilterArray={setFilterArray}
          />
        </View>
        <View style={homePageStyles.ViewNote}>
          <ViewNotes
            changeViewNote={changeViewNote}
            flag={flag}
            labelValue={labelValue}
            searchNote={searchNote}
            filterArray={filterArray}
          />
        </View>
        <View style={{height: '8%'}}>
          <FooterOptions />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
