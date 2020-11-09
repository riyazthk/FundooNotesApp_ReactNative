import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {getNotes} from '../../../../services/noteService';
import SearchBarStyle from '../../searchBarCard/SearchBarStyle';
const Delete = ({route}) => {
  const {flag = undefined} = route.params ?? {};
  const [restoreNote, setRestoreNote] = useState(false);
  const [deleteNote, setDeleteNote] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getNotes()
      .then((res) => {
        //setIsLoading(false);
        setDeleteNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [flag]);
  // console.log('delete notes', deleteNote);
  return (
    <View
      style={{
        paddingTop: 30,
        paddingLeft: 15,
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View>
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
            <Text style={{fontSize: 28}}>Deleted</Text>
          </View>
        </View>
      </View>
      {deleteNote.map((deleteNotes, deleteNotesIndex) => {
        return (
          <View key={deleteNotesIndex}>
            <TouchableOpacity
              key={deleteNotesIndex}
              onPress={() =>
                navigation.navigate('restorePage', {
                  deleteNotes: deleteNotes,
                  deleteNotesIndex: deleteNotesIndex,
                })
              }>
              {deleteNotes.delete === true ? (
                <View>
                  {/* <Text>pinned</Text> */}
                  <Card
                    containerStyle={{
                      backgroundColor: deleteNotes.color,
                      // width: props.changeViewNote === false ? 100 : null,
                      //width: 100,
                    }}>
                    <View>
                      <Text>{deleteNotes.title}</Text>
                    </View>
                    <View>
                      <Text>{deleteNotes.notes}</Text>
                    </View>
                  </Card>
                </View>
              ) : null}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
  //   <View>
  //     <Text>sdfsfdfd</Text>
  //     <Text>sdfsfdfd</Text>
  //     <Text>sdfsfdfd</Text>
  //     <Text>sdfsfdfd</Text>
  //     <Text>sdfsfdfd</Text>
  //     <Text>sdfsfdfd</Text>
  //   </View>;
};
export default Delete;
