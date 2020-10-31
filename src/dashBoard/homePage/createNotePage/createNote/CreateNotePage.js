import React, {useState} from 'react';
import {View} from 'react-native';
import AddTitleAndNote from '../addTitleAndNote/AddTitleAndNote';
import FooterSide from '../footerSide/FooterSide';
import HeaderOptions from '../headerOptions/HeaderOptions';
import CreateNoteStyles from './CreateNotePageStyle';

function CreateNotePage({navigation, route}) {
  const {item = undefined, index = undefined} = route.params ?? {};
  const [color, setColor] = useState('white');
  //console.log('color', color);
  return (
    // <View>
    //   {color === undefined ? (
    //     <View style={CreateNoteStyles.header}>
    //       <View style={CreateNoteStyles.headerOptions}>
    //         <HeaderOptions />
    //       </View>
    //       <View style={CreateNoteStyles.body}>
    //         <AddTitleAndNote item={item} index={index} />
    //       </View>
    //       <View style={CreateNoteStyles.footer}>
    //         <FooterSide index={index} />
    //       </View>
    //     </View>
    //   ) : (
    //     <View
    //       style={{
    //         backgroundColor: color,
    //         height: '100%',
    //         paddingTop: 25,
    //         flexDirection: 'column',
    //         justifyContent: 'space-between',
    //       }}>
    //       <View style={CreateNoteStyles.headerOptions}>
    //         <HeaderOptions />
    //       </View>
    //       <View style={CreateNoteStyles.body}>
    //         <AddTitleAndNote item={item} index={index} />
    //       </View>
    //       <View style={CreateNoteStyles.footer}>
    //         <FooterSide index={index} />
    //       </View>
    //     </View>
    //   )}
    // </View>
    <View>
      <View
        style={{
          height: '100%',
          backgroundColor: color,
          paddingTop: 25,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View style={CreateNoteStyles.headerOptions}>
          <HeaderOptions />
        </View>

        <View style={CreateNoteStyles.body}>
          <AddTitleAndNote item={item} index={index} color={color} />
        </View>

        <View style={CreateNoteStyles.footer}>
          <FooterSide index={index} setColor={setColor} />
        </View>
      </View>
    </View>
  );
}

export default CreateNotePage;
