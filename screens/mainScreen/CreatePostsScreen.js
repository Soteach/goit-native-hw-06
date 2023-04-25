import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';

import { Camera } from 'expo-camera';
import * as Location from 'expo-location';

export default function CreatePostsScreen({ navigation }) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState('');
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    // console.log('Latitude----->', location.coords.latitude);
    // console.log('Longitude----->', location.coords.longitude);
    // console.log('camera--->', photo.uri);
    setPhoto(photo.uri);
  };

  const keyboardHide = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    console.log('title:', title, 'location:', location);
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const sendPhoto = () => {
    console.log('navigation-->', navigation);
    navigation.navigate('Home', { photo });
  };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     console.log('status---->', status);
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photo }}
                style={{ height: 190, width: 190 }}
              />
            </View>
          )}
          <TouchableOpacity style={styles.snapContainer} onPress={takePhoto}>
            <View style={styles.iconCircle}>
              <Image source={require('../../assets/icons/camera.png')} />
            </View>
          </TouchableOpacity>
        </Camera>
      </View>
      <View style={styles.inputWrap}>
        <Text style={styles.addText}>Завантажте фото</Text>
        <TextInput
          style={styles.input}
          placeholder="Додайте назву фото..."
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => setisShowKeyboard(true)}
          value={title}
          onChangeText={value => {
            setTitle(value);
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Додайте назву місцевості..."
          placeholderTextColor={'#BDBDBD'}
          onFocus={() => setisShowKeyboard(true)}
          value={location}
          onChangeText={value => {
            setLocation(location);
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={sendPhoto}>
        <Text style={styles.sendTitle}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  pictureContainer: {},

  camera: {
    // height: '50%',
    // marginHorizontal: 12,
    // marginTop: 30,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // borderRadius: 10,
    // backgroundColor: '#212121',
    // padding: 12,
    height: 240,
    marginTop: 30,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapContainer: {
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    height: 51,
    width: 60,
    marginHorizontal: 16,
  },

  sendBtn: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  takePhotoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'transparent',

    height: 51,
    marginHorizontal: 16,
  },
  sendTitle: {
    color: 'orange',
    fontSize: 16,
  },
});
