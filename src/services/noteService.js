import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import Config from 'react-native-config';
const TOKEN = Config.USER_TOKEN;
export async function AddNotes(titleValue, notesValue, colorValue) {
  console.log(titleValue, notesValue);
  let data = {
    title: titleValue,
    notes: notesValue,
    color: colorValue,
  };
  await dbase.dbase.ref('/notes/' + TOKEN).push(data);
  // let key = await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push().
}
let key = [];
export async function GetNotes() {
  console.log('get view notes');
  let arr = [];
  await firebase.firebase
    .database()
    .ref('/notes/' + TOKEN)
    .once('value', function (snapshot) {
      snapshot.forEach(function (childSnapShot) {
        arr.push(childSnapShot.val());
        key.push(childSnapShot.key);
      });
    });
  return arr;
}
export async function DeleteNotes(index) {
  console.log(key[index]);
  await firebase.firebase
    .database()
    .ref('/notes/' + TOKEN)
    .child(key[index])
    .remove();
}
export async function EditNotes(getTitle, getNotes, index, color) {
  console.log('color', color);
  let data = {
    title: getTitle,
    notes: getNotes,
    color: color,
  };
  console.log(data);
  await firebase.firebase
    .database()
    .ref('/notes/' + TOKEN)
    .child(key[index])
    .update(data);
}
