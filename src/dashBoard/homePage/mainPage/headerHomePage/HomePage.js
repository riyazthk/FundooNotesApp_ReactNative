import React, {Component} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import StatusBarView from '../../../statusBar/StatusBarView';
import AddNotesSymbol from '../../addNotesSymbols/AddNotesSymbol';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import homePageStyles from './homePageStyle';

class HomePage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <StatusBarView />
        <View style={homePageStyles.bodyPage}>
          <View style={homePageStyles.searchBar}>
            <Card containerStyle={homePageStyles.titleCard}>
              <SearchBarCard />
            </Card>
          </View>
          <View>
            <FooterOptions />
          </View>
        </View>
      </View>
    );
  }
}
export default HomePage;
