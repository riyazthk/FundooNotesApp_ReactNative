import {StyleSheet} from 'react-native';

const UserProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  imageContainer: {
    // marginTop: 30,
    // marginBottom: 50,
    alignItems: 'center',
  },
  //   progressBarContainer: {
  //     marginTop: 20,
  //   },
  imageBox: {
    width: 100,
    height: 100,
  },
});
export default UserProfileStyle;
