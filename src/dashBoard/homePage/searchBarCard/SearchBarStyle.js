import {StyleSheet} from 'react-native';

const SearchBarStyle = StyleSheet.create({
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
  searchBar: {
    // height: '65%',
    // backgroundColor: 'blue',
  },
  headerOptions: {
    // flex: 1,
    flexDirection: 'row',
  },
  menu: {
    width: '20%',
    alignContent: 'center',
  },
  search: {
    width: '50%',
    paddingTop: 5,
  },
  searchText: {
    textAlign: 'left',
    fontSize: 15,
  },
  list: {
    //width: '100%',
    // height: 60,
    //backgroundColor: 'red',
  },
  styleImage: {
    height: 40,
    width: 40,
    // backgroundColor: 'violet',
  },
  loginbl: {
    width: '10%',
  },
});
export default SearchBarStyle;
