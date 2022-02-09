import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  StyleSheet,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/image_1.jpg'),
        image_2: require('../assets/image_2.jpg'),
        image_3: require('../assets/image_3.jpg'),
        image_4: require('../assets/image_4.jpg'),
        image_5: require('../assets/image_5.jpg'),
        image_6: require('../assets/image_6.jpg'),
        image_7: require('../assets/image_7.jpg'),
      };
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.imageIcon}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
              source={perivewImage[this.state.perivewImage]}
              style={styles.perivewImage}></Image>
            <View style={{ height: RFValue(this.state.dropDownHeight) }}>
              <DropDownPicker>
                items:
                {[
                  { lable1: 'Image1', value: 'image_1' },
                  { lable2: 'Image2', value: 'image_2' },
                  { lable3: 'Image3', value: 'image_3' },
                  { lable4: 'Image4', value: 'image_4' },
                  { lable5: 'Image5', value: 'image_5' },
                  { lable6: 'Image6', value: 'image_6' },
                  { lable7: 'Image7', value: 'image_7' },
                ]}
                defaultValue={this.state.perivewImage}
                containerStyle=
                {{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 20,
                }}
                OnOpen
                {() => {
                  this.setState({ dropDownHeight: 170 });
                }}
                OnClose
                {() => {
                  this.setState({ dropDownHeight: 40 });
                }}
                style = {{ backgroundColor: 'transparent' }}
                itemStyle{(justifyContent: 'flex-start')}
                dropDownStyle={{ backgroundColor: '#2a2a2a' }}
                lableStyle{{ color: 'white' }}
                arrowStyle{{ color: 'white' }}
                onChangeItem=
                {(item) => {
                  this.setState({
                    perivewImage: item.value,
                  });
                }}
              </DropDownPicker>
            </View>
            <TextInput
              style={(style = inputFont)}
              onChangeText={(caption) => {
                this.setState({ caption });
              }}
              placeholder={'caption'}
              placeholderTextColor="white"></TextInput>
          </ScrollView>
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  fieldsContainer: {
    flex: 0.85,
  },
  previewImage: {
    width: '93%',
    height: RFValue(250),
    alignSelf: 'center',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: 'contain',
  },
  inputFont: {
    height: RFValue(40),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
  },
  inputFontExtra: {
    marginTop: RFValue(15),
  },
  inputTextBig: {
    textAlignVertical: 'top',
    padding: RFValue(5),
  },
});
