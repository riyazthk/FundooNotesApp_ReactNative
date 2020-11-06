import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbStorage from '../fireBaseConfig/fireBaseAuthenticationConfig';
import RNFetchBlob from 'react-native-fetch-blob';
const Blob = RNFetchBlob.polyfill.Blob;
// //const fs = RNFetchBlob.fs;
//window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
//window.Blob = Blob;
export async function addNotes(
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
}

let key = [];
export async function getNotes() {
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

export async function deleteNotes(index) {
  console.log(key[index]);
  await firebase.firebase
    .database()
    .ref('/notes/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(key[index])
    .remove();
}

export async function editNotes(
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

export function addImage(image) {
  console.log('image123', image);
  //var file = image;
  var storageRef = dbStorage.dbStorage.ref('/profile');
  let uploadBlob;
  Blob.build(image, {type: 'image/jpg;'})
    .then((imageBlob) => {
      uploadBlob = imageBlob;
      console.log('upload blob', uploadBlob);
      return storageRef.put(imageBlob, {contentType: 'image/jpg'});
    })
    .catch((error) => {
      console.log(JSON.stringify(error) + ':error');
      return error;
    });
  console.log('storaage', storageRef);
}
//.put(image);
//console.log('response sucess', storageRef);
// Create a reference to 'mountains.jpg'
// var profileRef = storageRef.child('profile.jpeg');

// // Create a reference to 'images/mountains.jpg'
// var profilrImagesRef = storageRef.child('images/profile.jpeg');
// profileRef.name === profilrImagesRef.name; // true
// profileRef.fullPath === profilrImagesRef.fullPath; // false
//storageRef('/profile/' + 'er.riyaz2507@gmail.com').put(file);
// const uploadPath = image.uri;
// await dbStorage.dbStorage.ref('/profile').put(uploadPath);
//}

export async function retrieveImageDb() {
  const response = await dbStorage.dbStorage.ref('/profile').getDownloadURL();
  console.log(response);
  return response;
}

export async function addLabel(labelValue) {
  let data = {
    label: labelValue,
  };
  const response = await dbase.dbase
    .ref('/label/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .push(data);
  return response;
}

let labelKey = [];
export async function getLabel() {
  let labelArr = [];
  await firebase.firebase
    .database()
    .ref('/label/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .once('value', function (snapshot) {
      labelKey = [];
      snapshot.forEach(function (childSnapShot) {
        labelArr.push(childSnapShot.val());
        labelKey.push(childSnapShot.key);
      });
    });
  console.log('key', labelArr);
  return labelArr;
}
