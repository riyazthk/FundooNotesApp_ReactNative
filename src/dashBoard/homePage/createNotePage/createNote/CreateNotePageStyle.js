import {StyleSheet} from 'react-native';

const CreateNoteStyles = StyleSheet.create({
  header: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  body: {
    // flex: 1,
    height: '75%',
    paddingLeft: 15,
  },
  footer: {
    //flex: 1,
    height: '10%',
    // backgroundColor: 'violet',
    paddingTop: 20,
    paddingLeft: 15,
    // justifyContent: 'flex-end',
    // alignSelf: 'baseline',
    bottom: 0,
  },
  headerOptions: {
    height: 70,
    // flex: 1,
  },
});
export default CreateNoteStyles;
