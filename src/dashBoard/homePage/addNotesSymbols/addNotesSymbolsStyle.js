import {StyleSheet} from 'react-native';

const addNotesSymbolStyles = StyleSheet.create({
  notesCard: {
    position: 'relative',
    height: 75,
    width: 75,
    top: 410,
    left: 270,
    borderRadius: 100,
    justifyContent: 'space-around',
  },
  plusSymbol: {
    position: 'absolute',
    top: 1,
    bottom: 4,
  },
});
export default addNotesSymbolStyles;
