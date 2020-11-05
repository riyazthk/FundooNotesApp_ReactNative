import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import {Card} from 'react-native-elements';
import {GetNotes} from '../../../../services/noteService';
import AddTitleAndNoteStyle from '../../createNotePage/addTitleAndNote/AddTitleAndNoteStyle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
const ViewNotes = (props) => {
  const navigation = useNavigation();
  const [viewNote, setViewNote] = useState([]);
  console.log('value', props.flag);
  useEffect(() => {
    GetNotes()
      .then((res) => {
        setViewNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [props.flag]);

  return (
    <View>
      <ScrollView>
        <View style={{paddingLeft: 10, paddingTop: 5}}>
          <Text style={{fontSize: 25}}>pinned</Text>
        </View>

        <View
          style={{
            flexDirection: props.changeViewNote === false ? 'row' : 'column',
            flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
          }}>
          {viewNote.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('createNotePage', {
                      item: item,
                      index: index,
                    })
                  }>
                  {item.pin === true &&
                  item.archieve === false &&
                  item.delete === false ? (
                    <View>
                      {/* <Text>pinned</Text> */}
                      <Card
                        containerStyle={{
                          backgroundColor: item.color,
                          width: props.changeViewNote === false ? 170 : null,
                        }}>
                        <View>
                          <Text>{item.title}</Text>
                        </View>
                        <View>
                          <Text>{item.notes}</Text>
                        </View>
                        {item.remainder !== '' ? (
                          <View style={{width: '60%'}}>
                            <RNChipView
                              title={item.remainder}
                              avatar={<Alarm name="alarm" size={20} />}
                              avatarStyle={AddTitleAndNoteStyle.avatar}
                            />
                          </View>
                        ) : null}
                      </Card>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={{paddingLeft: 10, paddingTop: 5}}>
          <Text style={{fontSize: 25}}>others</Text>
        </View>
        <View
          style={{
            flexDirection: props.changeViewNote === false ? 'row' : 'column',
            flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
          }}>
          {viewNote.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate('createNotePage', {
                      item: item,
                      index: index,
                    })
                  }>
                  {item.pin === false &&
                  item.archieve === false &&
                  item.delete === false ? (
                    <View>
                      <Card
                        containerStyle={{
                          backgroundColor: item.color,
                          width: props.changeViewNote === false ? 170 : null,
                        }}>
                        <View>
                          <Text>{item.title}</Text>
                        </View>
                        <View>
                          <Text>{item.notes}</Text>
                        </View>
                        {item.remainder !== '' ? (
                          <View style={{width: '60%'}}>
                            <RNChipView
                              title={item.remainder}
                              avatar={<Alarm name="alarm" size={20} />}
                              avatarStyle={AddTitleAndNoteStyle.avatar}
                            />
                          </View>
                        ) : null}
                      </Card>
                    </View>
                  ) : null}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default ViewNotes;
