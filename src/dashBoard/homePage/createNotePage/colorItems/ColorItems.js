/* eslint-disable react-native/no-inline-styles */
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import colorItemStyle from './colorItemsStyle';
import React from 'react';
import {addColorNote} from '../../../../IntermediateDataServices/CallDataBase';

function ColorItems({setColor}) {
  // const navigation = useNavigation();
  let notesColor = [
    {title: 'MAROON', id: '#fc9dc9'},
    {title: 'WHITE', id: '#FFFFFF'},
    {title: 'salmon5', id: '#c559f7'},
    {title: 'dustyrose', id: '#e3c2f2'},
    {title: 'indianred4', id: '#86b6e3'},
    {title: 'brown', id: '#ffff8f'},
    {title: 'OLIVE', id: '#f7d6be'},
    {title: 'LIME', id: '#ebebeb'},
  ];
  // const [color, setColor] = useState();
  const handleClickColor = (value) => {
    addColorNote(value);
    setColor(value);
    // navigation.navigate('createNotePage', {color: value});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleClickColor(item.id)}>
        <Card
          containerStyle={{
            backgroundColor: item.id,
            height: 40,
            width: 40,
            borderRadius: 32,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={colorItemStyle.color}>
      <FlatList
        horizontal={true}
        data={notesColor}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.title}
      />
      {/* <CreateNotePage color={color} /> */}
    </View>
  );
}
export default ColorItems;
