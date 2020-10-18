import firebase from '../fireBaseConfig/fireBaseAuthenticationConfig';
import dbase from '../fireBaseConfig/fireBaseAuthenticationConfig';
export async function SignUpData(firstName, lastName, email, password) {
  let data = {
    FirstName: firstName,
    LastName: lastName,
    Email: email,
    Password: password,
  };
  console.log(data);
  // let response = await Dbase.
  // .add(data)
  //   .then(function (res) {
  //     console.log('sucess' + res.id);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  // console.log('response message', response);
  // return response;
  // let response = await Dbase.collection('user')
  //   .add(data)
  //   .then(function (res) {
  //     console.log('sucess', res);
  //   })
  //   .catch(function (err) {
  //     console.log('signUp failed', err);
  //   });
  // console.log('login sucess', response);
  // return response;
  let response = await firebase.firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      dbase.dbase.ref('/user').push(data);
      console.log(res);
      return res.user.uid;
    })
    .catch(function (err) {
      console.log(err.message);
      return err.message;
    });
  console.log(response);
  return response;
}

export async function SignIn(email, password) {
  return await firebase.firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
      return res.user.uid;
    })
    .catch(function (err) {
      var errorCode = err.code;
      console.log('error ', errorCode);
      var errorMessage = err.message;
      return errorCode;
    });
}

export async function GetUserEmail(email) {
  return await firebase.firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((res) => {
      console.log('response', res);
      return res;
    })
    .catch(function (err) {
      console.log('err', err);
      return err;
    });
}
