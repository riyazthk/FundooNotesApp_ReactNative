import {StyleSheet} from 'react-native';

const FooterOptionsStyles = StyleSheet.create({
  notesCard: {
    // position: 'relative',
    height: 75,
    width: 75,
    // top: 410,
    // left: 270,
    borderRadius: 100,
    // justifyContent: 'space-around',
  },
  plusSymbol: {
    position: 'relative',
    right: 15,
    // left: 1,
    bottom: 18,
    height: 80,
    width: 80,
  },
  footerStyle: {
    alignContent: 'center',
  },
  headerFooter: {
    flexDirection: 'row',
    padding: 15,
    // backgroundColor:'blue'
  },
  outerFooter: {
    width: '75%',
  },
  secondFooter: {},
  optionsCard: {},
  innerOptionsCard: {
    flexDirection: 'row',
  },
  checkBox: {
    width: '15%',
  },
  drawing: {
    width: '15%',
  },
  mic: {
    width: '15%',
  },
  image: {
    width: '15%',
  },
  checkBoxSymbol: {height: 40, width: 40},
  drawingSymbol: {height: 40, width: 40},
  micSymbol: {height: 40, width: 40},
  imageSymbol: {height: 40, width: 40},
  footerBody: {
    position: 'relative',
    bottom: '83%',
    // top: '20%',
    // backgroundColor: 'black',
    //height: '20%',
    width: '100%',
  },
});
export default FooterOptionsStyles;
