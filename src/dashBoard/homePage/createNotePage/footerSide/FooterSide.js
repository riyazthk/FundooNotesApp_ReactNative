import React from 'react';
import {View, Text, Image} from 'react-native';
import RightBottomSheet from '../bottomSheetPage/RightBottomSheet';
import FooterSideStyle from './FooterSideStyle';

function FooterSide(props) {
  console.log('footer side', props.notesObject.checklabel);
  return (
    <View>
      <View style={FooterSideStyle.footerComponent}>
        <View style={FooterSideStyle.addCircle}>
          <Image
            source={require('../../../../assets/box.png')}
            style={FooterSideStyle.styleImage}
          />
        </View>
        <View style={FooterSideStyle.text}>
          <Text style={FooterSideStyle.footerText}>Edited 12:17</Text>
        </View>
        <View style={FooterSideStyle.ellipsis}>
          <RightBottomSheet
            noteIndex={props.notesObject.noteIndex}
            notes={props.notes}
            //pin={props.notesObject.pin}
            //archive={props.notesObject.archieve}
            //delete={props.notesObject.delete}
            //color={props.notesObject.color}
            //checklabel={props.notesObject.checklabel}
            setColor={props.notesObject.setColor}
            setCheck={props.notesObject.setCheck}
            //setDeleteNote={props.notesObject.setDeleteNote}
            //setLabels={props.notesObject.setLabels}
          />
        </View>
      </View>
    </View>
  );
}

export default FooterSide;
