import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {GetNotes} from '../../../../services/noteService';
const Delete = () => {
  const [deleteNote, setDeleteNote] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    GetNotes()
      .then((res) => {
        //setIsLoading(false);
        setDeleteNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  return (
    <View>
      {deleteNote.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('restorePage', {
                  item: item,
                  index: index,
                })
              }>
              {item.delete === true ? (
                <View>
                  {/* <Text>pinned</Text> */}
                  <Card
                    containerStyle={{
                      backgroundColor: item.color,
                      // width: props.changeViewNote === false ? 100 : null,
                      //width: 100,
                    }}>
                    <View>
                      <Text>{item.title}</Text>
                    </View>
                    <View>
                      <Text>{item.notes}</Text>
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
