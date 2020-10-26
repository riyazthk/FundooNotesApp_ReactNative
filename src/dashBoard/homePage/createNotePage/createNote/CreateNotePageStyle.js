import {StyleSheet} from 'react-native';

const CreateNoteStyles = StyleSheet.create({
  header: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 25,
  },
  body: {
    // flex: 1,
    height: '75%',
    paddingLeft: 15,
  },
  footer: {
    flex: 1,
    height: '10%',
    // backgroundColor: 'violet',
    paddingTop: 20,
    paddingLeft: 15,
    // backgroundColor: 'blue',
    // justifyContent: 'flex-end',
    // alignSelf: 'baseline',
  },
  headerOptions: {
    height: 70,
    // flex: 1,
  },
});
export default CreateNoteStyles;
