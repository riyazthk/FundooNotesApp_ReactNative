/* eslint-disable react-native/no-inline-styles */
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
  const [archieve, setArchieve] = useState(
    item !== undefined ? item.archieve : false,
  );
  const [deleteNote, setDeleteNote] = useState(
    item !== undefined ? item.delete : false,
  );
  const [dateTime, setDateTime] = useState(
    item !== undefined ? item.remainder : '',
  );
  const [remainder, setRemainder] = useState(false);
  const [check, setCheck] = useState(0);
  console.log('notes', title, notes, archieve);
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
              archieve={archieve}
              setArchieve={setArchieve}
              title={title}
              notes={notes}
              color={color}
              index={index}
              deleteNote={deleteNote}
              setRemainder={setRemainder}
              remainder={remainder}
              dateTime={dateTime}
              setDateTime={setDateTime}
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
              dateTime={dateTime}
              remainder={remainder}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide
              index={index}
              setColor={setColor}
              setCheck={setCheck}
              setDeleteNote={setDeleteNote}
            />
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
              archieve={archieve}
              setArchieve={setArchieve}
              deleteNote={deleteNote}
              remainder={remainder}
              //setFlag={props.setFlag}
              setRemainder={setRemainder}
              setDateTime={setDateTime}
              dateTime={dateTime}
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
              remainder={remainder}
              dateTime={dateTime}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide
              item={item}
              index={index}
              pin={pin}
              title={title}
              notes={notes}
              color={color}
              archieve={archieve}
              deleteNote={deleteNote}
              setColor={setColor}
              setCheck={setCheck}
              setDeleteNote={setDeleteNote}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default CreateNotePage;
