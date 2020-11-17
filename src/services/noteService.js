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
  labelValue,
  checklabel,
) {
  let label = {
    value: labelValue,
    check: checklabel,
  };
  let data = {
    title: titleValue,
    notes: notesValue,
    color: colorValue,
    pin: pinValue,
    archieve: archieveValue,
    delete: deleteValue,
    remainder: remainderValue,
    label: label,
  };
  console.log('data', data);
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
  console.log('keys', arr);
  return arr;
}

export async function deletes(index) {
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
  labelValue,
  checklabel,
) {
  let label = {
    value: labelValue,
    check: checklabel,
  };
  let data = {
    title: getTitle,
    notes: getNotes,
    color: color,
    pin: pin,
    archieve: archieve,
    delete: deletes,
    remainder: remainder,
    label: label,
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
let dataValue = [];
export async function updateLabel(
  getTitle,
  getNotes,
  color,
  pin,
  archieve,
  deletes,
  remainder,
  label,
  labelIndex,
) {
  let data = {
    title: getTitle,
    notes: getNotes,
    color: color,
    pin: pin,
    archieve: archieve,
    delete: deletes,
    remainder: remainder,
    label: label,
  };
  console.log('label key value', labelKey, labelIndex);
  dataValue.push(data);
  let dbData = {
    label: label,
    notes: dataValue,
  };
  await firebase.firebase
    .database()
    .ref('/label/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72/')
    .child(labelKey[labelIndex])
    .update(dbData);
}
export async function deleteLabels(index) {
  console.log(labelKey[index]);
  let response = await dbase.dbase
    .ref('/label/' + 'THbOLZ2ABpbWuZnJI1THnh4QBl72')
    .child(labelKey[index])
    .remove();
}
