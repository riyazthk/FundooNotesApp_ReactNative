import {useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity, TextInput} from 'react-native';
import AddTitleAndNoteStyle from '../addTitleAndNote/AddTitleAndNoteStyle';
import HeaderOptionStyle from '../headerOptions/HeaderOptionStyle';
const RestorePage = ({route}) => {
  const {item = undefined, index = undefined} = route.params ?? {};
  const navigation = useNavigation();
  const handleBackToDeletePage = () => {
    navigation.navigate('delete');
  };
  return (
    <View>
      <View style={HeaderOptionStyle.headerOptions}>
        <View style={HeaderOptionStyle.backOptions}>
          <TouchableOpacity onPress={() => handleBackToDeletePage()}>
            <Image
              source={require('../../../../assets/back.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{
                height: 40,
                borderColor: item.color,
                borderWidth: 1,
              }}
              placeholder="title"
              // onChangeText={(text) => handleTitleValue(text)}
              value={item.title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{
                height: 40,
                borderColor: item.color,
                borderWidth: 1,
              }}
              placeholder="note"
              //onChangeText={(text) => handleNoteValue(text)}
              value={item.notes}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default RestorePage;
