/* eslint-disable react-native/no-inline-styles */
import {Chip} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {RNChipView} from 'react-native-chip-view';
import {Card} from 'react-native-elements';
import {getNotes} from '../../../../services/noteService';
// import AddTitleAndNoteStyle from '../../createNotePage/addTitleAndNote/AddTitleAndNoteStyle';
import Alarm from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewNotes = (props) => {
  const navigation = useNavigation();
  const [viewNote, setViewNote] = useState([]);
  //const flag = props.flag === undefined ? 0 : props.flag;
  const arrayFilter = props.searchNote === false ? viewNote : props.filterArray;
  // console.log(
  //   'value',
  //   props.flag,
  //   props.filterArray,
  //   props.searchNote,
  //   arrayFilter,
  //   props.changeViewNote,
  // );
  useEffect(() => {
    getNotes()
      .then((res) => {
        setViewNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [props.flag]);

  const renderItem = (notes, noteIndex) => {
    // console.log('notes entry', notes.item.title, notes.index);
    return (
      <View>
        <View key={notes.index}>
          <TouchableOpacity
            key={notes.index}
            onPress={() =>
              navigation.navigate('createNotePage', {
                notes: notes.item,
                noteIndex: notes.index,
              })
            }>
            {notes.item.pin === true &&
            notes.item.archieve === false &&
            notes.item.delete === false ? (
              <View>
                <Card
                  containerStyle={{
                    backgroundColor: notes.item.color,
                    width: props.changeViewNote === false ? 170 : null,
                    borderRadius: 10,
                  }}>
                  <View>
                    <Text>{notes.item.title}</Text>
                  </View>
                  <View>
                    <Text>{notes.item.notes}</Text>
                  </View>
                  {notes.item.remainder !== '' ? (
                    <View style={{width: '80%'}}>
                      <RNChipView
                        title={notes.item.remainder}
                        avatar={<Alarm name="alarm" size={20} />}
                        avatarStyle={{
                          width: '40%',
                          justifyContent: 'center',
                          paddingLeft: 24,
                        }}
                        backgroundColor={notes.item.color}
                      />
                    </View>
                  ) : null}
                  {notes.item.label.value !== '' &&
                  props.labelValue.label !== notes.item.label.value ? (
                    <Chip style={{width: 70}}>{notes.item.label.value}</Chip>
                  ) : null}
                </Card>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderUnPinItem = (notes) => {
    // console.log('2notes entry', notes.item.title, notes.index);
    return (
      <View>
        <View key={notes.index}>
          <TouchableOpacity
            key={notes.index}
            onPress={() =>
              navigation.navigate('createNotePage', {
                notes: notes.item,
                noteIndex: notes.index,
              })
            }>
            {notes.item.pin === false &&
            notes.item.archieve === false &&
            notes.item.delete === false ? (
              <View>
                <Card
                  containerStyle={{
                    backgroundColor: notes.item.color,
                    width: props.changeViewNote === false ? 170 : null,
                    borderRadius: 10,
                  }}>
                  <View>
                    <Text>{notes.item.title}</Text>
                  </View>
                  <View>
                    <Text>{notes.item.notes}</Text>
                  </View>
                  {notes.item.remainder !== '' ? (
                    <View style={{width: '80%'}}>
                      <RNChipView
                        title={notes.item.remainder}
                        avatar={<Alarm name="alarm" size={20} />}
                        avatarStyle={{
                          width: '40%',
                          justifyContent: 'center',
                          paddingLeft: 24,
                        }}
                        backgroundColor={notes.item.color}
                      />
                    </View>
                  ) : null}
                  {notes.item.label.value !== '' &&
                  props.labelValue.label !== notes.item.label.value ? (
                    <Chip style={{width: 70}}>{notes.item.label.value}</Chip>
                  ) : null}
                </Card>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    // <View>
    //   {/* {props.searchNote === false ? ( */}
    //   <ScrollView>
    //     <View style={{paddingLeft: 10, paddingTop: 5}}>
    //       <Text style={{fontSize: 25}}>pinned</Text>
    //     </View>

    //     <View
    //       style={{
    //         flexDirection: props.changeViewNote === false ? 'row' : 'column',
    //         flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
    //       }}>
    //       {
    //         // (props.filterArray === null?
    //         arrayFilter.map((notes, noteIndex) => {
    //           return (
    //             <View key={noteIndex}>
    //               <TouchableOpacity
    //                 key={noteIndex}
    //                 onPress={() =>
    //                   navigation.navigate('createNotePage', {
    //                     notes: notes,
    //                     noteIndex: noteIndex,
    //                   })
    //                 }>
    //                 {notes.pin === true &&
    //                 notes.archieve === false &&
    //                 notes.delete === false ? (
    //                   <View>
    //                     <Card
    //                       containerStyle={{
    //                         backgroundColor: notes.color,
    //                         width: props.changeViewNote === false ? 170 : null,
    //                         borderRadius: 10,
    //                       }}>
    //                       <View>
    //                         <Text>{notes.title}</Text>
    //                       </View>
    //                       <View>
    //                         <Text>{notes.notes}</Text>
    //                       </View>
    //                       {notes.remainder !== '' ? (
    //                         <View style={{width: '80%'}}>
    //                           <RNChipView
    //                             title={notes.remainder}
    //                             avatar={<Alarm name="alarm" size={20} />}
    //                             avatarStyle={{
    //                               width: '40%',
    //                               justifyContent: 'center',
    //                               paddingLeft: 24,
    //                             }}
    //                             backgroundColor={notes.color}
    //                           />
    //                         </View>
    //                       ) : null}
    //                       {notes.label.value !== '' &&
    //                       props.labelValue.label !== notes.label.value ? (
    //                         <Chip style={{width: 70}}>{notes.label.value}</Chip>
    //                       ) : null}
    //                     </Card>
    //                   </View>
    //                 ) : null}
    //               </TouchableOpacity>
    //             </View>
    //           );
    //         })
    //       }
    //     </View>

    //     <View style={{paddingLeft: 10, paddingTop: 5}}>
    //       <Text style={{fontSize: 25}}>others</Text>
    //     </View>
    //     <View
    //       style={{
    //         flexDirection: props.changeViewNote === false ? 'row' : 'column',
    //         flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
    //       }}>
    //       {arrayFilter.map((notes, noteIndex) => {
    //         return (
    //           <View key={noteIndex}>
    //             <TouchableOpacity
    //               key={noteIndex}
    //               onPress={() =>
    //                 navigation.navigate('createNotePage', {
    //                   notes: notes,
    //                   noteIndex: noteIndex,
    //                 })
    //               }>
    //               {notes.pin === false &&
    //               notes.archieve === false &&
    //               notes.delete === false ? (
    //                 <View>
    //                   <Card
    //                     containerStyle={{
    //                       backgroundColor: notes.color,
    //                       width: props.changeViewNote === false ? 170 : null,
    //                       borderRadius: 10,
    //                     }}>
    //                     <View>
    //                       <Text>{notes.title}</Text>
    //                     </View>
    //                     <View>
    //                       <Text>{notes.notes}</Text>
    //                     </View>
    //                     {notes.remainder !== '' ? (
    //                       <View style={{width: '80%'}}>
    //                         <RNChipView
    //                           title={notes.remainder}
    //                           avatar={<Alarm name="alarm" size={20} />}
    //                           avatarStyle={{
    //                             width: '40%',
    //                             justifyContent: 'center',
    //                             paddingLeft: 24,
    //                           }}
    //                           backgroundColor={notes.color}
    //                           //titleStyle={AddTitleAndNoteStyle.titlestyle}
    //                         />
    //                       </View>
    //                     ) : null}
    //                     {notes.label.value !== '' &&
    //                     props.labelValue.label !== notes.label.value ? (
    //                       <Chip style={{width: 70}}>{notes.label.value}</Chip>
    //                     ) : null}
    //                   </Card>
    //                 </View>
    //               ) : null}
    //             </TouchableOpacity>
    //           </View>
    //         );
    //       })}
    //     </View>
    //   </ScrollView>
    // </View>
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
          <FlatList
            data={arrayFilter}
            renderItem={renderItem}
            keyExtractor={(notes, noteIndex) => noteIndex}
          />
        </View>
        <View>
          <View style={{paddingLeft: 10, paddingTop: 5}}>
            <Text style={{fontSize: 25}}>others</Text>
          </View>
          <View
            style={{
              flexDirection: props.changeViewNote === false ? 'row' : 'column',
              flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
              // height: '100%',
            }}>
            <FlatList
              data={arrayFilter}
              renderItem={renderUnPinItem}
              keyExtractor={(notes, noteIndex) => noteIndex}
            />
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: props.changeViewNote === false ? 'row' : 'column',
            flexWrap: props.changeViewNote === false ? 'wrap' : 'nowrap',
            height: '100%',
          }}> */}

        {/* </View> */}
      </ScrollView>
    </View>
  );
};
export default ViewNotes;
