import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  headerScreen: {
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#fafafa',
    padding:25
  },
  outerCard: {
    height: 350,
  },
  innerCardEmail: {
    justifyContent: 'space-around',
    height: 85,
  },
  innerCardPassword: {
    justifyContent: 'space-around',
    height: 85,
  },
  innerCardSubmit: {
    justifyContent: 'space-around',
    height: 85,
  },
  titleLogin: {
    backgroundColor: 'black',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 30,
  },
  alignResetPassword: {
    textAlign: 'right',
    fontSize: 18,
  },
  alignSignUp: {
    fontSize: 18,
  },
});
export default styles;
