import React, {Component} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-elements';
import StatusBarView from '../../../statusBar/StatusBarView';
import SearchBarCard from '../../searchBarCard/SearchBar';
import FooterOptions from '../footerHomePage/FooterOptions';
import ViewNotes from '../viewNotes/ViewNotes';
import homePageStyles from './homePageStyle';

class HomePage extends Component {
  constructor(props) {
    super(props);
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
          <View style={homePageStyles.ViewNote}>
            <ViewNotes />
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
