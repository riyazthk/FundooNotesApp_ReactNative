/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AddTitleAndNote from '../addTitleAndNote/AddTitleAndNote';
import FooterSide from '../footerSide/FooterSide';
import HeaderOptions from '../headerOptions/HeaderOptions';
import CreateNoteStyles from './CreateNotePageStyle';

function CreateNotePage({navigation, route}) {
  const {
    notes = undefined,
    noteIndex = undefined,
    labels = undefined,
    checkLabelValue = undefined,
    labelIndexValue = undefined,
    flag = undefined,
  } = route.params ?? {};
  const [title, setTitle] = useState(notes !== undefined ? notes.title : '');
  const [description, setDescription] = useState(
    notes !== undefined ? notes.notes : '',
  );
  const [color, setColor] = useState(
    notes !== undefined ? notes.color : 'white',
  );
  const [pin, setPin] = useState(notes !== undefined ? notes.pin : false);
  const [archieve, setArchieve] = useState(
    notes !== undefined ? notes.archieve : false,
  );
  const [deleteNote, setDeleteNote] = useState(
    notes !== undefined ? notes.delete : false,
  );
  const [dateTime, setDateTime] = useState(
    notes !== undefined ? notes.remainder : '',
  );
  const [remainder, setRemainder] = useState(
    notes !== undefined ? notes.remainder : '',
  );
  const [check, setCheck] = useState(0);
  const [label, setLabel] = useState(
    notes !== undefined ? notes.label.value : '',
  );
  const [checklabel, setCheckLabel] = useState(
    notes !== undefined ? notes.label.check : false,
  );
  const [labelIndex, setLabelIndex] = useState();
  console.log(
    'notes',
    title,
    archieve,
    'label ',
    label,
    notes,
    'flag value',
    flag,
    'check label',
    checklabel,
  );
  const notesObject = {
    pin: pin,
    setPin: setPin,
    archieve: archieve,
    setArchieve: setArchieve,
    title: title,
    setTitle: setTitle,
    setDescription: setDescription,
    description: description,
    color: color,
    noteIndex: noteIndex,
    deleteNote: deleteNote,
    setRemainder: setRemainder,
    remainder: remainder,
    dateTime: dateTime,
    setDateTime: setDateTime,
    label: label,
    setLabel: setLabel,
    labels: labels,
    labelIndex: labelIndex,
    checklabel: checklabel,
    setCheckLabel: setCheckLabel,
    setColor: setColor,
    setDeleteNote: setDeleteNote,
    setCheck: setCheck,
  };
  useEffect(() => {
    if (labels !== undefined) {
      setLabel(labels);
      setCheckLabel(checkLabelValue);
      setLabelIndex(labelIndexValue);
    }
  }, [flag]);

  return (
    <View>
      {noteIndex === undefined ? (
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
              // pin={pin}
              // setPin={setPin}
              notesObject={notesObject}

              //checkLabel={checkLabel}
            />
          </View>

          <View style={CreateNoteStyles.body}>
            <AddTitleAndNote
              // setTitle={setTitle}
              // setDescription={setDescription}
              // noteIndex={noteIndex}
              // color={color}
              // title={title}
              // description={description}
              // dateTime={dateTime}
              // remainder={remainder}
              // label={label}
              // labels={labels}
              // checklabel={checklabel}
              notesObject={notesObject}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide
              //noteIndex={noteIndex}
              //setColor={setColor}
              //setCheck={setCheck}
              //setDeleteNote={setDeleteNote}
              notes={notes}
              //setLabel={setLabel}
              //checklabel={checklabel}
              //setCheckLabel={setCheckLabel}
              //checkLabel={checkLabel}
              notesObject={notesObject}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            height: '100%',
            backgroundColor: check === 0 ? notes.color : color,
            paddingTop: 25,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View style={CreateNoteStyles.headerOptions}>
            <HeaderOptions
              notesObject={notesObject}
              //checkLabel={checkLabel}
            />
          </View>

          <View style={CreateNoteStyles.body}>
            <AddTitleAndNote
              // setTitle={setTitle}
              // setDescription={setDescription}
              // noteIndex={noteIndex}
              // color={color}
              // title={title}
              // description={description}
              // remainder={remainder}
              // dateTime={dateTime}
              // label={label}
              // labels={labels}
              // checklabel={checklabel}
              notesObject={notesObject}
            />
          </View>

          <View style={CreateNoteStyles.footer}>
            <FooterSide
              notes={notes}
              // noteIndex={noteIndex}
              // pin={pin}
              // title={title}
              // description={description}
              // color={color}
              // archieve={archieve}
              // deleteNote={deleteNote}
              // setColor={setColor}
              // setCheck={setCheck}
              // setDeleteNote={setDeleteNote}
              // setLabel={setLabel}
              // checklabel={checklabel}
              // setCheckLabel={setCheckLabel}
              notesObject={notesObject}
              //checkLabel={checkLabel}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default CreateNotePage;
