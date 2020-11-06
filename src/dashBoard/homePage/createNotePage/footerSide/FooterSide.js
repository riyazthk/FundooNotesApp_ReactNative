import React from 'react';
import {View, Text, Image} from 'react-native';
import RightBottomSheet from '../bottomSheetPage/RightBottomSheet';
import FooterSideStyle from './FooterSideStyle';

function FooterSide(props) {
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
            noteIndex={props.noteIndex}
            notes={props.notes}
            pin={props.pin}
            archive={props.archieve}
            delete={props.delete}
            color={props.color}
            setColor={props.setColor}
            setCheck={props.setCheck}
            setDeleteNote={props.setDeleteNote}
          />
        </View>
      </View>
    </View>
  );
}

export default FooterSide;
