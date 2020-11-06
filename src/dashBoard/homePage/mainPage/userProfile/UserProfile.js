import React, {Component, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Avatar} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  addImage,
  retrieveImage,
  retrieveImageDb,
} from '../../../../services/noteService';
import UserProfileStyle from './UserProfileStyle';
import * as Progress from 'react-native-progress';
//import RNFetchBlob from 'rn-fetch-blob';
//import
//const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob;
function UserProfile() {
  var imageBlob = null;
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transfered, setTransfered] = useState(0);
  const [retrieveImage, setRetrieveImage] = useState(null);
  //   useEffect(() => {
  //     retrieveImage()
  //       .then((res) => {
  //         setRetrieveImage(res);
  //       })
  //       .catch((err) => {
  //         console.log('error', err);
  //       });
  //   }, []);

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      //   maxHeight: 2000,
      //   maxWidth: 2000,
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
      } else {
        const source = {uri: res.uri};
        setImage(source);
        setData(res.data);
      }
      //var blob = new Blob([image], {type: 'image/jpeg'});
      // imageBlob = await image.blob();
    });
    //console.log('resourcepath', this.state.resourcePath);
  };
  const addImageToDb = async () => {
    // RNFetchBlob.fetch(
    //   'POST',
    //   'https://console.firebase.google.com/u/0/project/fundooapp-5f1ac/storage/fundooapp-5f1ac.appspot.com/files',
    //   {
    //     Authorization: 'Bearer access-token',
    //     otherHeader: 'foo',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   [
    //     {
    //       name: 'profile',
    //       filename: 'profile.jpeg',
    //       type: 'image/jpeg',
    //       data: data,
    //     },
    //   ],
    // )
    //   .then(async (resp) => {
    //     // var blob = new Blob([image], {type: 'image/jpeg'});
    //     console.log('data', data, 'image', image);
    //     let response = await addImage(resp);
    //     console.log('response', response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    addImage(image)
      .then((res) => {
        console.log('sucess', res);
      })
      .catch((err) => {
        console.log('error message', err);
      });
  };
  // const retrieveImages = async () => {
  //   let response = await retrieveImageDb()
  //     .then((res) => {
  //       setRetrieveImage(res);
  //     })
  //     .catch((err) => {
  //       console.log('error', err);
  //     });
  // };
  return (
    <View style={UserProfileStyle.container}>
      <View style={UserProfileStyle.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + image.data,
          }}
          style={{width: 100, height: 100}}
        /> */}
        {/* <Image
            source={{uri: this.state.resourcePath.uri}}
            style={{width: 200, height: 200}}
          /> */}
        <TouchableOpacity
          onPress={() => selectFile()}
          style={UserProfileStyle.button}>
          <Text style={UserProfileStyle.buttonText}>Select File</Text>
        </TouchableOpacity>
        <View style={UserProfileStyle.imageContainer}>
          {/* <Image source={{uri: image.uri}} style={UserProfileStyle.imageBox} /> */}

          {image !== null ? (
            <Image
              source={{uri: image.uri}}
              style={UserProfileStyle.imageBox}
            />
          ) : null}
        </View>
        {uploading ? (
          <View style={UserProfileStyle.progressBarContainer}>
            <Progress.Bar progress={0.3} width={300} />
          </View>
        ) : (
          <TouchableOpacity
            style={UserProfileStyle.button}
            onPress={() => addImageToDb()}>
            <Text style={UserProfileStyle.buttonText}>Upload image</Text>
          </TouchableOpacity>
        )}
        {/* </View> */}
        {/* <TouchableOpacity onPress={() => retrieveImages()}> */}
        <View>
          <Image source={{retrieveImage}} />
        </View>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default UserProfile;
// import dbStorage from '../../../../fireBaseConfig/fireBaseAuthenticationConfig';
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Image,
//   ActivityIndicator,
//   Platform,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import UserProfileStyle from '../userProfile/UserProfileStyle';
// import ImagePicker from 'react-native-image-picker';

// export default class UserProfile extends React.Component {
//   state = {
//     //rimagePath: require('./img/default.jpg'),
//     isLoading: false,
//     status: '',
//   };
//   //   const selectFile = () => {
//   //     var options = {
//   //       title: 'Select Image',
//   //       //   maxHeight: 2000,
//   //       //   maxWidth: 2000,
//   //       customButtons: [
//   //         {
//   //           name: 'customOptionKey',
//   //           title: 'Choose file from Custom Option',
//   //         },
//   //       ],
//   //       storageOptions: {
//   //         skipBackup: true,
//   //         path: 'images',
//   //       },
//   //     };
//   chooseFile = () => {
//     this.setState({status: ''});
//     var options = {
//       title: 'Select Image',
//       customButtons: [
//         {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
//       ],
//       storageOptions: {
//         skipBackup: true, // do not backup to iCloud
//         path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker', response);
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let path = this.getPlatformPath(response).value;
//         let fileName = this.getFileName(response.fileName, path);
//         this.setState({imagePath: path});
//         this.uploadImageToStorage(path, fileName);
//       }
//     });
//   };

//   getFileName(name, path) {
//     if (name != null) {
//       return name;
//     }

//     if (Platform.OS === 'ios') {
//       path = '~' + path.substring(path.indexOf('/Documents'));
//     }
//     return path.split('/').pop();
//   }

//   uploadImageToStorage(path, name) {
//     this.setState({isLoading: true});
//     let reference = dbStorage.dbStorage.ref(name);
//     let task = reference.put(path);
//     task
//       .then(() => {
//         console.log('Image uploaded to the bucket!');
//         this.setState({
//           isLoading: false,
//           status: 'Image uploaded successfully',
//         });
//       })
//       .catch((e) => {
//         //status = 'Something went wrong';
//         console.log('uploading image error => ', e);
//         this.setState({isLoading: false, status: 'Something went wrong'});
//       });
//   }

//   /**
//    * Get platform specific value from response
//    */
//   getPlatformPath({path, uri}) {
//     return Platform.select({
//       android: {value: path},
//       // ios: {value: uri},
//     });
//   }

//   getPlatformURI(imagePath) {
//     let imgSource = imagePath;
//     if (isNaN(imagePath)) {
//       imgSource = {uri: this.state.imagePath};
//       if (Platform.OS == 'android') {
//         imgSource.uri = 'file:///' + imgSource.uri;
//       }
//     }
//     return imgSource;
//   }

//   render() {
//     let {imagePath} = this.state;
//     let imgSource = this.getPlatformURI(imagePath);
//     return (
//       <SafeAreaView style={styles.container}>
//         <TouchableOpacity
//           onPress={() => this.chooseFile()}
//           style={UserProfileStyle.button}>
//           <Text style={UserProfileStyle.buttonText}>Select File</Text>
//         </TouchableOpacity>
//         {this.state.isLoading && (
//           <ActivityIndicator size="large" style={styles.loadingIndicator} />
//         )}
//         <View style={styles.imgContainer}>
//           <Text style={styles.boldTextStyle}>{this.state.status}</Text>
//           <Image style={styles.uploadImage} source={imgSource} />
//           <View style={styles.eightyWidthStyle}>
//             <Button title={'Upload Image'} onPress={this.chooseFile}></Button>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#e6e6fa',
//   },
//   imgContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
//   eightyWidthStyle: {
//     width: '80%',
//     margin: 2,
//   },
//   uploadImage: {
//     width: '80%',
//     height: 300,
//   },
//   loadingIndicator: {
//     zIndex: 5,
//     width: '100%',
//     height: '100%',
//   },
//   boldTextStyle: {
//     fontWeight: 'bold',
//     fontSize: 22,
//     color: '#5EB0E5',
//   },
// });
