import {useNavigation} from '@react-navigation/native';
import React, {Component, useRef, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import HeaderOptionStyle from '../createNotePage/headerOptions/HeaderOptionStyle';
import UserProfile from '../mainPage/userProfile/UserProfile';
import SearchBarStyle from './SearchBarStyle';
function SearchBarCard({setChangeViewNote, navigation}) {
  // const navigation = useNavigation();
  const [gridView, setGridView] = useState(false);
  const [toggleImage, setToggleImage] = useState(false);
  const refRBSheet = useRef();
  const [count, setCount] = useState(false);
  const handleViewNotes = () => {
    setGridView(!gridView);

    setChangeViewNote(gridView);
    if (count === false) {
      console.log('count', count);
      setToggleImage(false);
      setCount(true);
    } else {
      console.log('else count', count);
      setCount(false);
      setToggleImage(true);
    }
  };
  return (
    <Card containerStyle={SearchBarStyle.titleCard}>
      <View style={SearchBarStyle.searchBar}>
        <View style={SearchBarStyle.headerOptions}>
          <View style={SearchBarStyle.menu}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../../../assets/menu.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>
          <View style={SearchBarStyle.search}>
            <Text style={SearchBarStyle.searchText}>Search Your Notes...</Text>
          </View>
          {toggleImage === false ? (
            <View style={SearchBarStyle.list}>
              <TouchableOpacity
                onPress={() => handleViewNotes()}
                style={SearchBarStyle.styleImage}>
                <Image
                  source={require('../../../assets/lis.png')}
                  style={SearchBarStyle.styleImage}
                  //
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={SearchBarStyle.list}>
              <TouchableOpacity
                onPress={() => handleViewNotes()}
                style={SearchBarStyle.styleImage}>
                <Image
                  source={require('../../../assets/grid.png')}
                  style={{height: 35, width: 35}}
                  //
                />
              </TouchableOpacity>
            </View>
          )}
          {/* </View> */}
          {/* </View> */}

          <View style={SearchBarStyle.loginbl}>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <Image
                source={require('../../../assets/loginbl.png')}
                style={{height: 35, width: 35}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'tranperent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
            container: {
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
          }}
          height={1000}>
          <UserProfile />
        </RBSheet>
      </View>
    </Card>
  );
}

export default SearchBarCard;
