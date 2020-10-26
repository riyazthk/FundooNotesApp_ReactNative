import {StyleSheet} from 'react-native';

const SearchBarStyle = StyleSheet.create({
  headerOptions: {
    flex: 1,
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
    width: '20%',
  },
  loginbl: {
    width: '10%',
  },
});
export default SearchBarStyle;
