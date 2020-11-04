import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {GetNotes} from '../../../../services/noteService';
const ArchieveNote = () => {
  const [archieveNote, setArchieveNote] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    GetNotes()
      .then((res) => {
        //setIsLoading(false);
        setArchieveNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <View>
      {archieveNote.map((item, index) => {
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
              {item.archieve === true ? (
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
};
export default ArchieveNote;
