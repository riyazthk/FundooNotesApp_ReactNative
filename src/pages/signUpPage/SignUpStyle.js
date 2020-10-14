import {StyleSheet} from 'react-native';
const newUserStyles = StyleSheet.create({
  newUserHeader: {
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    padding: 15,
  },
  newUserTitle: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: 10,
  },
  newUserSubmit: {
    height: 90,
    justifyContent: 'space-around',
  },
  newUserFirstName: {
    height: 85,
     paddingTop:5
  },
  newUserLastName: {
    // heigth:80,
    height: 85,
  },
  newUserEmail: {
    height: 85,
  },
  newUserPassword: {
    height: 85,
  },
  newUserConfirmPassword: {
    height: 85,
  },
  newUserTitleBox: {
    height: 50,
  },
});
export default newUserStyles;
