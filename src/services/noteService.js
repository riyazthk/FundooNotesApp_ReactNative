import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbStorage from '../fireBaseConfig/fireBaseAuthenticationConfig';
export async function AddNotes(
  titleValue,
  notesValue,
  colorValue,
  pinValue,
  archieveValue,
  deleteValue,
  remainderValue,
) {
  let data = {
    title: titleValue,
    notes: notesValue,
    color: colorValue,
    pin: pinValue,
    archieve: archieveValue,
    delete: deleteValue,
    remainder: remainderValue,
  };
  console.log(data);
  await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push(data);
  // let key = await dbase.dbase.ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72').push().
  //return callback;
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
  deletes,
  remainder,
) {
  console.log('index', index);
  let data = {
    title: getTitle,
    notes: getNotes,
    color: color,
    pin: pin,
    archieve: archieve,
    delete: deletes,
    remainder: remainder,
  };
  console.log('edit', data);
  let response = await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .update(data);
  return response;
}

export async function addImage(image) {
  console.log('imageee', image);
  console.log('image uri', image.uri);
  const uploadPath = image.uri;
  let response = await dbStorage.dbStorage
    .ref('/profile' + image.name)
    .put(uploadPath);
  // console.log(response);
}
export async function retrieveImageDb() {
  const response = await dbStorage.dbStorage.ref('/profile').getDownloadURL();
  console.log(response);
  return response;
}
