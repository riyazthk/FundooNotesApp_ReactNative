/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Image} from 'react-native-elements';
import {getNotes} from '../../../../services/noteService';
import SearchBarStyle from '../../searchBarCard/SearchBarStyle';
const ArchieveNote = () => {
  const [archieveNote, setArchieveNote] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getNotes()
      .then((res) => {
        setArchieveNote(res);
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
              source={require('../../../../assets/menu.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '55%'}}>
          <Text style={{fontSize: 28}}>Archieve</Text>
        </View>
      </View>
      <View>
        {archieveNote.map((notes, noteIndex) => {
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
                {notes.archieve === true ? (
                  <View>
                    {/* <Text>pinned</Text> */}
                    <Card
                      containerStyle={{
                        backgroundColor: notes.color,
                        // width: props.changeViewNote === false ? 100 : null,
                        //width: 100,
                      }}>
                      <View>
                        <Text>{notes.title}</Text>
                      </View>
                      <View>
                        <Text>{notes.notes}</Text>
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
};
export default ArchieveNote;
