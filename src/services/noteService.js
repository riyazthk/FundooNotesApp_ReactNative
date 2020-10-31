import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';

export async function AddNotes(titleValue, notesValue, colorValue) {
  console.log(titleValue, notesValue);
  let data = {
    title: titleValue,
    notes: notesValue,
    color: colorValue,
  };
  await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push(data);
  // let key = await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push().
}
let key = [];
export async function GetNotes() {
  console.log('get view notes');
  let arr = [];
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
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
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .remove();
}
export async function EditNotes(getTitle, getNotes, index) {
  let data = {
    title: getTitle,
    notes: getNotes,
  };
  console.log(data);
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .update(data);
}
