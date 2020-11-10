/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import {Card} from 'react-native-elements';
import {getNotes} from '../../../../services/noteService';
import AddTitleAndNoteStyle from '../../createNotePage/addTitleAndNote/AddTitleAndNoteStyle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import {Chip} from 'react-native-paper';
const ViewNotes = (props) => {
  const navigation = useNavigation();
  const [viewNote, setViewNote] = useState([]);
  console.log('value', props.flag);
  useEffect(() => {
    getNotes()
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
          {viewNote.map((notes, noteIndex) => {
            return (
              <View key={noteIndex}>
                <TouchableOpacity
                  key={noteIndex}
                  onPress={() =>
                    navigation.navigate('createNotePage', {
                      notes: notes,
                      noteIndex: noteIndex,
                    })
                  }>
                  {notes.pin === true &&
                  notes.archieve === false &&
                  notes.delete === false ? (
                    <View>
                      <Card
                        containerStyle={{
                          backgroundColor: notes.color,
                          width: props.changeViewNote === false ? 170 : null,
                          borderRadius: 10,
                        }}>
                        <View>
                          <Text>{notes.title}</Text>
                        </View>
                        <View>
                          <Text>{notes.notes}</Text>
                        </View>
                        {notes.remainder !== '' ? (
                          <View style={{width: '80%'}}>
                            <RNChipView
                              title={notes.remainder}
                              avatar={<Alarm name="alarm" size={20} />}
                              avatarStyle={{
                                width: '40%',
                                justifyContent: 'center',
                                paddingLeft: 24,
                              }}
                              backgroundColor={notes.color}
                            />
                          </View>
                        ) : null}
                        {notes.label.value !== '' ? (
                          <Chip style={{width: 70}}>{notes.label.value}</Chip>
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
          {viewNote.map((notes, noteIndex) => {
            return (
              <View key={noteIndex}>
                <TouchableOpacity
                  key={noteIndex}
                  onPress={() =>
                    navigation.navigate('createNotePage', {
                      notes: notes,
                      noteIndex: noteIndex,
                    })
                  }>
                  {notes.pin === false &&
                  notes.archieve === false &&
                  notes.delete === false ? (
                    <View>
                      <Card
                        containerStyle={{
                          backgroundColor: notes.color,
                          width: props.changeViewNote === false ? 170 : null,
                          borderRadius: 10,
                        }}>
                        <View>
                          <Text>{notes.title}</Text>
                        </View>
                        <View>
                          <Text>{notes.notes}</Text>
                        </View>
                        {notes.remainder !== '' ? (
                          <View style={{width: '80%'}}>
                            <RNChipView
                              title={notes.remainder}
                              avatar={<Alarm name="alarm" size={20} />}
                              avatarStyle={{
                                width: '40%',
                                justifyContent: 'center',
                                paddingLeft: 24,
                              }}
                              backgroundColor={notes.color}
                              //titleStyle={AddTitleAndNoteStyle.titlestyle}
                            />
                          </View>
                        ) : null}
                        {notes.label.value !== '' ? (
                          <Chip style={{width: 70}}>{notes.label.value}</Chip>
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
