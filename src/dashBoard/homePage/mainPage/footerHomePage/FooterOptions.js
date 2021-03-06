import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import pushNotification from '../../../../fireBaseConfig/pushNotification';
import FooterOptionsStyles from './FooterOptionsStyle';
function FooterOptions(props) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={FooterOptionsStyles.footerBody}>
        <View style={FooterOptionsStyles.headerFooter}>
          <View style={FooterOptionsStyles.outerFooter} />
          <View style={FooterOptionsStyles.footerStyle}>
            <Card containerStyle={FooterOptionsStyles.notesCard}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('createNotePage')}>
                  <Image
                    source={require('../../../../assets/plus2.png')}
                    style={FooterOptionsStyles.plusSymbol}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </View>
        <View style={FooterOptionsStyles.secondFooter}>
          <Card containerStyle={FooterOptionsStyles.optionsCard}>
            <View style={FooterOptionsStyles.innerOptionsCard}>
              <View style={FooterOptionsStyles.checkBox}>
                <TouchableOpacity >
                  <Image
                    source={require('../../../../assets/checkbox.png')}
                    style={FooterOptionsStyles.checkBoxSymbol}
                  />
                </TouchableOpacity>
              </View>
              <View style={FooterOptionsStyles.drawing}>
                <Image
                  source={require('../../../../assets/drawing.png')}
                  style={FooterOptionsStyles.drawingSymbol}
                />
              </View>
              <View style={FooterOptionsStyles.mic}>
                <Image
                  source={require('../../../../assets/mic.png')}
                  style={FooterOptionsStyles.micSymbol}
                />
              </View>
              <View style={FooterOptionsStyles.image}>
                <Image
                  source={require('../../../../assets/image1.png')}
                  style={FooterOptionsStyles.imageSymbol}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
}
export default FooterOptions;
