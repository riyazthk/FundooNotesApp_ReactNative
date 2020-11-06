/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import {Image, Card} from 'react-native-elements';
import {getNotes, GetNotes} from '../../../services/noteService';
import SearchBarStyle from '../searchBarCard/SearchBarStyle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';
import AddTitleAndNoteStyle from '../createNotePage/addTitleAndNote/AddTitleAndNoteStyle';
function Remainder() {
  const [remainderNote, setRemainderNote] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getNotes()
      .then((res) => {
        //setIsLoading(false);
        setRemainderNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <View
      style={{
        paddingTop: 30,
        paddingLeft: 15,
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View style={{height: 50, flexDirection: 'row'}}>
        <View style={SearchBarStyle.menu}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../../../assets/menu.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '55%'}}>
          <Text style={{fontSize: 28}}>Remainder</Text>
        </View>
      </View>
      <View>
        {remainderNote.map((notes, noteIndex) => {
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
                {notes.remainder !== '' ? (
                  <View>
                    <Card
                      containerStyle={{
                        backgroundColor: notes.color,
                      }}>
                      <View>
                        <Text>{notes.title}</Text>
                      </View>
                      <View>
                        <Text>{notes.notes}</Text>
                      </View>
                      <View style={{width: '60%'}}>
                        <RNChipView
                          title={notes.remainder}
                          avatar={<Alarm name="alarm" size={20} />}
                          avatarStyle={AddTitleAndNoteStyle.avatar}
                        />
                      </View>
                    </Card>
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default Remainder;
