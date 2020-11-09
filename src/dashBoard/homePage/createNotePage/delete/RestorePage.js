/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, View, TouchableOpacity, TextInput, Text} from 'react-native';
import AddTitleAndNoteStyle from '../addTitleAndNote/AddTitleAndNoteStyle';
import HeaderOptionStyle from '../headerOptions/HeaderOptionStyle';
import bottomSheetStyle from '../bottomSheetPage/RightBottomSheetStyle';
import RBSheet from 'react-native-raw-bottom-sheet';
import {deletes, editNotes} from '../../../../services/noteService';
const RestorePage = ({route}) => {
  const {deleteNotes = undefined, deleteNotesIndex = undefined} =
    route.params ?? {};
  // const [permanentDelete, setPermanentDelete] = useState(
  //   deleteNotes !== undefined,
  // );
  console.log('deleted', deleteNotesIndex);
  const refRBSheet = useRef();
  let restoreNote = false;
  const [flag, setFlag] = useState(Math.random());
  const navigation = useNavigation();
  const handleBackToDeletePage = () => {
    navigation.navigate('delete');
  };
  const handleClick = () => {
    refRBSheet.current.open();
  };
  const handleClickDelete = () => {
    deletes(deleteNotesIndex);
    navigation.navigate('delete', {flag: flag});
  };
  const handleClickRestore = () => {
    editNotes(
      deleteNotes.title,
      deleteNotes.notes,
      deleteNotesIndex,
      deleteNotes.color,
      deleteNotes.pin,
      deleteNotes.archieve,
      restoreNote,
      deleteNotes.remainder,
      deleteNotes.label,
    );
    navigation.navigate('delete', {flag: flag});
  };
  return (
    <View
      style={{
        paddingTop: 30,
        paddingLeft: 15,
        height: '100%',
        backgroundColor: deleteNotes.color,
      }}>
      <View>
        <View style={HeaderOptionStyle.backOptions}>
          <TouchableOpacity onPress={() => handleBackToDeletePage()}>
            <Image
              source={require('../../../../assets/back.png')}
              style={{height: 35, width: 35}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={{height: '87 %'}}>
          <View style={AddTitleAndNoteStyle.title}>
            <TextInput
              style={{
                height: 40,
                borderColor: deleteNotes.color,
                borderWidth: 1,
              }}
              placeholder="title"
              value={deleteNotes.title}
            />
          </View>
          <View style={AddTitleAndNoteStyle.note}>
            <TextInput
              style={{
                height: 40,
                borderColor: deleteNotes.color,
                borderWidth: 1,
              }}
              placeholder="note"
              value={deleteNotes.notes}
            />
          </View>
        </View>
      </View>
      <View style={{paddingLeft: 330}}>
        <TouchableOpacity
          onPress={() => handleClick()}
          style={bottomSheetStyle.styleImage}>
          <Image
            source={require('../../../../assets/more.png')}
            style={bottomSheetStyle.styleImage}
          />
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={200}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
              marginBottom: '13%',
            },
            draggableIcon: {
              display: 'flex',
            },
          }}>
          <TouchableOpacity onPress={() => handleClickDelete()}>
            <View style={bottomSheetStyle.delete}>
              <View style={bottomSheetStyle.deleteImage}>
                <Image
                  source={require('../../../../assets/delete.png')}
                  style={bottomSheetStyle.styleImage}
                />
              </View>
              <View style={bottomSheetStyle.deleteText}>
                <Text style={bottomSheetStyle.alignDeleteText}>
                  Permanent Delete
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClickRestore()}>
            <View style={bottomSheetStyle.copy}>
              <View style={bottomSheetStyle.copyImage}>
                <Image
                  source={require('../../../../assets/restore.png')}
                  style={bottomSheetStyle.styleImage}
                />
              </View>
              <View style={bottomSheetStyle.copyText}>
                <Text style={bottomSheetStyle.alignCopyText}>restore</Text>
              </View>
            </View>
          </TouchableOpacity>
        </RBSheet>
      </View>
    </View>
  );
};
export default RestorePage;
