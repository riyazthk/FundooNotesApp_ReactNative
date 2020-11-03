import React, {useState} from 'react';
import {View} from 'react-native';
import AddTitleAndNote from '../addTitleAndNote/AddTitleAndNote';
import FooterSide from '../footerSide/FooterSide';
import HeaderOptions from '../headerOptions/HeaderOptions';
import CreateNoteStyles from './CreateNotePageStyle';

function CreateNotePage({navigation, route}) {
  const {item = undefined, index = undefined} = route.params ?? {};
  const [title, setTitle] = useState(item !== undefined ? item.title : '');
  const [notes, setNotes] = useState(item !== undefined ? item.notes : '');
  const [color, setColor] = useState(item !== undefined ? item.color : 'white');
  const [pin, setPin] = useState(item !== undefined ? item.pin : false);
  const [check, setCheck] = useState(0);
  console.log('check title', title, notes, color, pin);
  return (
    <View>
      {index === undefined ? (
        <View
          style={{
            height: '100%',
            backgroundColor: color,
            paddingTop: 25,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={CreateNoteStyles.headerOptions}>
            <HeaderOptions
              pin={pin}
              setPin={setPin}
              title={title}
              notes={notes}
              color={color}
              index={index}
            />
          </View>

          <View style={CreateNoteStyles.body}>
            <AddTitleAndNote
              setTitle={setTitle}
              setNotes={setNotes}
              index={index}
              color={color}
              title={title}
              notes={notes}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide index={index} setColor={setColor} setCheck={setCheck} />
          </View>
        </View>
      ) : (
        <View
          style={{
            height: '100%',
            backgroundColor: check === 0 ? item.color : color,
            paddingTop: 25,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={CreateNoteStyles.headerOptions}>
            <HeaderOptions
              pin={pin}
              setPin={setPin}
              title={title}
              notes={notes}
              color={color}
              index={index}
            />
          </View>

          <View style={CreateNoteStyles.body}>
            <AddTitleAndNote
              setTitle={setTitle}
              setNotes={setNotes}
              index={index}
              color={color}
              title={title}
              notes={notes}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide
              item={item}
              index={index}
              setColor={setColor}
              setCheck={setCheck}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default CreateNotePage;
