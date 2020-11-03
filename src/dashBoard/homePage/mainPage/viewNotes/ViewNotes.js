import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {GetNotes} from '../../../../services/noteService';

const ViewNotes = (props) => {
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
        <View>
          <Text>pinned</Text>
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
                  {item.pin === true ? (
                    <View>
                      {/* <Text>pinned</Text> */}
                      <Card
                        containerStyle={{
                          backgroundColor: item.color,
                          width: props.changeViewNote === false ? 100 : null,
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
        <View>
          <Text>others</Text>
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
                  {item.pin === false ? (
                    <View>
                      <Card
                        containerStyle={{
                          backgroundColor: item.color,
                          width: props.changeViewNote === false ? 100 : null,
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
      </ScrollView>
    </View>
  );
};
export default ViewNotes;
