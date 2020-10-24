import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import StatusBarView from '../../statusBar/StatusBarView';
import AddNotesSymbol from '../addNotesSymbols/AddNotesSymbol';
import SearchBarCard from '../searchBarCard/SearchBar';
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
          <View>
            <Card containerStyle={homePageStyles.titleCard}>
              <SearchBarCard />
            </Card>
          </View>
          <View>
            <AddNotesSymbol />
          </View>
        </View>
      </View>
    );
  }
}
export default HomePage;
