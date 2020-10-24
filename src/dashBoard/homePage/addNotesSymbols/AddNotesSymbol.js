import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import {View} from 'react-native';
import addNotesSymbolStyles from './addNotesSymbolsStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function AddNotesSymbol(createNotePage) {
  const navigation = useNavigation();
  return (
    <View>
      <Card containerStyle={addNotesSymbolStyles.notesCard}>
        <Icon
          name="plus"
          size={50}
          onPress={() => navigation.navigate('createNotePage')}
        />
      </Card>
    </View>
  );
}
//}
export default AddNotesSymbol;
