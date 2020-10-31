import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {GetNotes} from '../../../../services/noteService';

function ViewNotes() {
  const navigation = useNavigation();
  const [viewNote, setViewNote] = useState([]);
  useEffect(() => {
    GetNotes()
      .then((res) => {
        setViewNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  return (
    <View>
      <ScrollView>
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
                <View>
                  <Card containerStyle={{backgroundColor: item.color}}>
                    <View>
                      <Text>{item.title}</Text>
                    </View>
                    <View>
                      <Text>{item.notes}</Text>
                    </View>
                  </Card>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default ViewNotes;
