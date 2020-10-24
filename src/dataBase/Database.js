// import sqLite from 'react-native-sqlite-storage';
// sqLite.DEBUG(true);
// sqLite.enablePromise(true);

// const database_name = 'Reactoffline.db';
// const database_version = '1.0';
// const database_displayname = 'SQLite React Offline Database';
// const database_size = 200000;

// export default class Database {
//   initDB() {
//     let db;
//     return new Promise((resolve) => {
//       console.log('plugin intergrity check');
//       sqLite
//         .echoTest()
//         .then(() => {
//           console.log('integrity checking passed');
//           console.log('opening database');
//           sqLite
//             .openDatabase(
//               database_name,
//               database_version,
//               database_displayname,
//               database_size,
//             )
//             .then((DB) => {
//               db = DB;
//               console.log('database open');
//               db.transaction('CREATE TABLE Token(tokenId,tokenValue)')
//                 .then(() => {
//                   console.log('database table  is ready');
//                 })
//                 .catch((err) => {
//                   console.log('received error', err);
//                   console.log('database not ready yet');
//                 });
//               resolve(db);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         })
//         .catch((error) => {
//           console.log('echoTest failed', error);
//         });
//     });
//   }
// }
// // module.exports=Database

// // "react-native-input-outline": "^1.0.2",

// //"react-native-material-textfield": "git+https://github.com/javarahulsharma/react-native-material-textfield.git",
// //"react-native-sqlite-storage": "^5.0.0",
