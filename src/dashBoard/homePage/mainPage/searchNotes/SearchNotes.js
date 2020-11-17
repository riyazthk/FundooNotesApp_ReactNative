import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Card, Input} from 'react-native-elements';
import {getNotes} from '../../../../services/noteService';
import SearchBarStyle from '../../searchBarCard/SearchBarStyle';
const SearchNotes = (props) => {
  const [clickSearch, setClickSearch] = useState(false);
  const [viewNote, setViewNote] = useState([]);

  useEffect(() => {
    getNotes()
      .then((res) => {
        setViewNote(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  const handleSearchClick = () => {
    setClickSearch(!clickSearch);
    props.setSearchNote(!props.searchNote);
  };
  const handleSearchNotes = (text) => {
    var notes = [];
    viewNote.map((note, index) => {
      var key = index;
      notes.push(viewNote[key]);
      const searchData = notes.filter((item) => {
        return item.title.includes(text);
      });
      //console.log('item', searchData);
      props.setFilterArray(searchData);
    });
    //console.log('note', notes);
    //console.log('filtr', filterArray);
  };
  return (
    <View>
      {clickSearch === false ? (
        <TouchableOpacity onPress={() => handleSearchClick()}>
          <Text style={SearchBarStyle.searchText}>Search Your Notes...</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{height: '200%', width: '100%'}}
          onPress={() => handleSearchClick()}>
          <View style={{paddingBottom:10}}>
            <Input
              placeholder="search"
              onChangeText={(text) => handleSearchNotes(text)}
              style={{}}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default SearchNotes;
