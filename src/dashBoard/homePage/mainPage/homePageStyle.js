import {StyleSheet} from 'react-native';

const homePageStyles = StyleSheet.create({
  bodyPage: {
    paddingTop: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  titleCard: {
    borderRadius: 10,
    height: 60,
    // bo:'0px 0px 4px 4px lightgray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
export default homePageStyles;
