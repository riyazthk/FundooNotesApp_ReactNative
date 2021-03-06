import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {editNotes} from '../../../../services/noteService';
import ColorItems from '../colorItems/ColorItems';
import bottomSheetStyle from './RightBottomSheetStyle';

function RightBottomSheet(props) {
  const [flag, setFlag] = useState(Math.random());
  const navigation = useNavigation();
  //const [deletes, setDeletes] = useState(false);
  let deletes = false;
  console.log('checking rightbottom sheet', props.notes, props.noteIndex);
  const refRBSheet = useRef();
  const handleClick = () => {
    console.log('working');
    refRBSheet.current.open();
  };
  const handleClickDelete = () => {
    deletes = true;
    console.log('delete', deletes, props.notes.checklabel,props.notes.label);
    editNotes(
      props.notes.title,
      props.notes.notes,
      props.noteIndex,
      props.notes.color,
      props.notes.pin,
      props.notes.archieve,
      deletes,
      props.notes.remainder,
      props.notes.label.value,
      props.notes.label.check,
    );
    navigation.navigate('home', {flag: flag});
  };

  const handleClickCopy = () => {};
  const handleClickSend = () => {};
  const handleClickCollaborator = () => {};
  const handleClickLabels = () => {
    // props.setLabels();
    navigation.navigate('addLabel');
  };
  return (
    <View>
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
        height={400}
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
              <Text style={bottomSheetStyle.alignDeleteText}>Delete</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickCopy()}>
          <View style={bottomSheetStyle.copy}>
            <View style={bottomSheetStyle.copyImage}>
              <Image
                source={require('../../../../assets/copy.png')}
                style={bottomSheetStyle.styleImage}
              />
            </View>
            <View style={bottomSheetStyle.copyText}>
              <Text style={bottomSheetStyle.alignCopyText}>Make a Copy</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickSend()}>
          <View style={bottomSheetStyle.send}>
            <View style={bottomSheetStyle.sendImage}>
              <Image
                source={require('../../../../assets/share1.png')}
                style={bottomSheetStyle.styleImage}
              />
            </View>
            <View style={bottomSheetStyle.sendText}>
              <Text style={bottomSheetStyle.alignSendText}>send</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickCollaborator()}>
          <View style={bottomSheetStyle.collaborator}>
            <View style={bottomSheetStyle.collaboratorImage}>
              <Image
                source={require('../../../../assets/collaborator.png')}
                style={bottomSheetStyle.styleImage}
              />
            </View>
            <View style={bottomSheetStyle.collaboratorText}>
              <Text style={bottomSheetStyle.alignCollaboratorText}>
                Collaborator
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClickLabels()}>
          <View style={bottomSheetStyle.labels}>
            <View style={bottomSheetStyle.labelsImage}>
              <Image
                source={require('../../../../assets/arrow.png')}
                style={bottomSheetStyle.styleImage}
              />
            </View>
            <View style={bottomSheetStyle.labelsText}>
              <Text style={bottomSheetStyle.alignLabelsText}>Labels</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <ColorItems
            setColor={props.setColor}
            setCheck={props.setCheck}
            noteIndex={props.noteIndex}
            note={props.note}
          />
        </View>
      </RBSheet>
    </View>
  );
}
export default RightBottomSheet;
