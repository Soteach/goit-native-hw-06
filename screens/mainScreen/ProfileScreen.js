import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import * as RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/1.jpg')}
        resizeMode="cover"
      >
        <View style={styles.form}>
          <Image
            style={styles.arrowBack}
            source={require('../../assets/icons/log-out.png')}
          />
          <View style={styles.avatarWrap}>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.avatarDel}>
                <Image
                  style={styles.del}
                  source={require('../../assets/icons/close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <View style={styles.feed}>
            <View style={styles.post}>
              <View style={styles.imageWrap}>
                <View style={styles.imageTemplate}></View>
              </View>
              <Text style={styles.imageName}>Ліс</Text>
              <View style={styles.description}>
                <View style={styles.rates}>
                  <View style={styles.comment}>
                    <Image
                      stype={styles.commentImg}
                      source={require('../../assets/icons/Shapeor.png')}
                    />
                    <Text style={styles.commentCounter}>0</Text>
                  </View>
                  <View style={styles.comment}>
                    <Image
                      stype={styles.commentImg}
                      source={require('../../assets/icons/thumbs-up.png')}
                    />
                    <Text style={styles.commentCounter}>0</Text>
                  </View>
                </View>
                <View style={styles.loc}>
                  <Image
                    style={styles.location}
                    source={require('../../assets/icons/map-pin.png')}
                  />
                  <Text style={styles.locationText}>
                    Ivano-Frankivsk, Ukraine
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

// navigation

{
  /* <View style={styles.navWrap}>
  <View style={styles.navigationBar}>
    <Image
      style={styles.home}
      source={require('../../../assets/icons/grid.png')}
    ></Image>
    <TouchableOpacity style={styles.add}>
      <Image
        style={styles.plus}
        source={require('../../../assets/icons/union.png')}
      ></Image>
    </TouchableOpacity>
    <Image
      style={styles.profile}
      source={require('../../../assets/icons/user.png')}
    ></Image>
  </View>
</View>; */
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // maxWidth: 375,
    backgroundColor: '#fff',
    position: 'relative',
    // marginRight: 16,

    // overflow: 'hidden',
    // alignItems: "center",
    // justifyContent: "center",

    flex: 1,
    backgroundColor: '#fff',
  },
  image: { flex: 1, justifyContent: 'flex-end' },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrap: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  avatarDel: {
    width: 25,
    height: 25,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 25 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 14,
    marginRight: -25 / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',

    justifyContent: 'center',
  },
  del: {},
  userName: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 33,
  },
  feed: {},
  post: { marginBottom: 34, marginHorizontal: 16 },
  imageWrap: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageTemplate: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageName: { marginBottom: 11, fontWeight: '500' },
  rates: { flexDirection: 'row' },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comment: { flexDirection: 'row', marginRight: 24 },
  commentImg: {},
  commentCounter: { marginLeft: 9, color: '#212121' },
  loc: { flexDirection: 'row' },
  location: {},
  locationText: { marginLeft: 8, textDecorationLine: 'underline' },
  header: {
    // marginTop: 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomColor: '#000',
    // borderTopColor: 'transparent',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0,
    elevation: 1,
    // marginBottom: 32,
    position: 'relative',
    paddingTop: 27,
    paddingBottom: 11,
  },
  arrowBack: {
    position: 'absolute',
    right: 0,
    width: 24,
    height: 24,
    marginTop: 24,
    marginRight: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  // imageWrap: {
  //   marginBottom: 32,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // commentsFeed: {
  //   marginRight: 32,
  //   // marginHorizontal: 16,
  // },
  // commentRight: {
  //   flexDirection: 'row',

  //   marginBottom: 24,
  // },
  // commentLeft: {
  //   flexDirection: 'row',
  //   marginBottom: 24,
  // },
  // avatarRight: { marginRight: 16 },
  // avatarLeft: { marginLeft: 16 },
  // commentGroupRight: {
  //   flexDirection: 'column',
  //   padding: 16,
  //   backgroundColor: 'rgba(0, 0, 0, 0.03)',
  //   borderTopRightRadius: 6,
  //   borderBottomRightRadius: 6,
  //   borderBottomLeftRadius: 6,
  // },
  // commentGroupLeft: {
  //   padding: 16,
  //   backgroundColor: 'rgba(0, 0, 0, 0.03)',
  //   borderTopLeftRadius: 6,
  //   borderBottomRightRadius: 6,
  //   borderBottomLeftRadius: 6,
  // },
  // comment: {
  //   fontSize: 13,
  //   // lineHeight: 1.38,
  //   color: '#212121',
  //   marginBottom: 8,
  // },
  commentTime: {
    fontSize: 10,
    // lineHeight: '1.2',
    color: '#BDBDBD',
  },
  commentTimeRight: {
    fontSize: 10,
    color: '#BDBDBD',
    textAlign: 'right',
  },
  addComment: {
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    fontSize: 16,
    color: '#BDBDBD',
    fontWeight: '500',
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingRight: 8,
  },
  btn: {
    marginTop: 22,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    marginRight: 8,
  },
  icon: {
    height: 14,
    width: 10,
  },
  navWrap: {
    // justifyContent: 'stretch',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
  },
  navigationBar: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    paddingTop: 9,
    paddingBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // justifyContent: 'center',
    borderTopColor: '#000',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0,
    elevation: 1,
  },
  home: {
    width: 24,
    height: 24,
    // marginLeft: 90
  },
  add: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 13,
    height: 13,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profile: {
    width: 24,
    height: 24,
    // marginRight: 90
  },
});
