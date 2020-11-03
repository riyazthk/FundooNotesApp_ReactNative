import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import Config from 'react-native-config';
export async function AddNotes(
  titleValue,
  notesValue,
  colorValue,
  pinValue,
  archieveValue,
) {
  let data = {
    title: titleValue,
    notes: notesValue,
    color: colorValue,
    pin: pinValue,
    archieve: archieveValue,
  };
  console.log(data);
  await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push(data);
  // let key = await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push().
}
let key = [];
let boolean = true;
export async function GetNotes() {
  console.log('get view notes');
  let arr = [];
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .once('value', function (snapshot) {
      key = [];
      snapshot.forEach(function (childSnapShot) {
        arr.push(childSnapShot.val());
        key.push(childSnapShot.key);
      });
    });
  console.log('key', key);
  return arr;
}
export async function DeleteNotes(index) {
  console.log(key[index]);
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .remove();
}
export async function EditNotes(
  getTitle,
  getNotes,
  index,
  color,
  pin,
  archieve,
) {
  console.log('index', index);
  let data = {
    title: getTitle,
    notes: getNotes,
    color: color,
    pin: pin,
    archieve: archieve,
  };
  console.log('edit', data);
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .update(data);
}
