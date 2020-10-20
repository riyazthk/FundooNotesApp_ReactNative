// import Database from './Database';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'Reactoffline.db'});
export function AddToken(data) {
  console.log('addToken method checking.....');
  return new Promise((resolve) => {
    console.log('entry');
    db.then((dataBase) => {
      console.log('checking database connection........');
      dataBase
        .transaction((tx) => {
          tx.executeSql('INSERT INTO Token VALUES(?,?)', [
            data.tokenId,
            data.tokenValue,
          ]).then(([tx, result]) => {
            resolve(result);
          });
        })
        .then((result) => {
          this.CloseDatabase(db);
        })
        .catch((err) => {
          console.log('closeDatabase  ', err);
        });
    }).catch((err) => {
      console.log('riyaz', err);
    });
  });
}
