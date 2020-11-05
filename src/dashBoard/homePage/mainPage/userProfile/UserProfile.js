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
function UserProfile() {
  var imageBlob = null;
  const [image, setImage] = useState(null);
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

    ImagePicker.showImagePicker(options, async (res) => {
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
      }
      //var blob = new Blob([image], {type: 'image/jpeg'});
      imageBlob = await image.blob();
    });
    //console.log('resourcepath', this.state.resourcePath);
  };

  const addImageToDb = async () => {
    let response = await addImage(image);
  };
  const retrieveImages = async () => {
    let response = await retrieveImageDb()
      .then((res) => {
        setRetrieveImage(res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
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
// }

export default UserProfile;
