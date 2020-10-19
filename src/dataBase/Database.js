import sqLite from 'react-native-sqlite-storage';
sqLite.DEBUG(true);
sqLite.enablePromise(true);

const database_name = 'Reactoffline.db';
const database_version = '1.0';
const database_displayname = 'SQLite React Offline Database';
const database_size = 200000;

export default class Database {
  initDB() {
    let db;
    return new Promise((resolve) => {
      console.log('plugin intergrity check');
      sqLite
        .echoTest()
        .then(() => {
          console.log('integrity checking passed');
          console.log('opening database');
          sqLite
            .openDatabase(
              database_name,
              database_version,
              database_displayname,
              database_size,
            )
            .then((DB) => {
              db = DB;
              console.log('database open');
              db.executeSql('')
                .then(() => {
                  console.log('database is ready');
                })
                .catch((err) => {
                  console.log('received error', err);
                });
              resolve(db);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log('echoTest failed', error);
        });
    });
  }
}
