import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { authSignInUser } from '../../redux/auth/authOperations';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen({ navigation }) {
  // console.log('navigation', navigation);
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isSecurePassword, setIsSecurePassword] = useState(true);
  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 20 * 2
  );

  const handleSubmit = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
    // console.log('submit', state);
    dispatch(authSignInUser(state));
    setstate(initialState);
  };

  const dispatch = useDispatch();

  const closeKeyboardBackdrop = () => {
    setIsShowKeyBoard(false);
    Keyboard.dismiss();
  };

  // const [dimensions, setdimensions] = useState(
  //   Dimensions.get('window').width - 20 * 2
  // );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 20 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={closeKeyboardBackdrop}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/1.jpg')}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyBoard ? 320 : 0,
              }}
            >
              <View style={styles.avatarWrap}>
                <View styles={styles.avatar}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.avatarAdd}
                  >
                    <View style={styles.test}></View>
                    <View
                      style={[
                        styles.test2,
                        { transform: [{ rotate: '90deg' }] },
                      ]}
                    ></View>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.headerText}>Увійти</Text>
              <StatusBar style="auto" />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => setIsShowKeyBoard(true)}
                value={state.email}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                placeholderTextColor={'#BDBDBD'}
                secureTextEntry={true}
                onFocus={() => setIsShowKeyBoard(true)}
                value={state.password}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, password: value }))
                }
              />
              <Text style={styles.showPass}>Показати</Text>

              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnTitle}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => {
                  navigation.navigate('Register');
                }}
              >
                <Text style={styles.inputText}>
                  Відсутній аккаунт? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnTitle: {
    fontSize: 28,

    color: '#fff',
    letterSpacing: 0.01,
    textAlign: 'center',

    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 8,
    padding: 16,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
  },
  showPass: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'right',
    marginRight: 32,
    marginTop: -45,
  },
  btn: {
    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    paddingBottom: 144,
    // marginBottom: 144,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 32,
    marginBottom: 32,
    color: '#212121',
  },
  avatarWrap: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    marginTop: -60,
  },
  avatarAdd: {
    width: 25,
    height: 25,
    borderColor: '#FF6C00',
    borderWidth: 1,
    borderRadius: 25 / 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: 14,
    marginRight: -25 / 2,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  test: {
    width: 1,
    height: 13,
    backgroundColor: '#FF6C00',
    marginTop: 6,
    position: 'relative',
  },
  test2: {
    width: 1,
    height: 13,
    backgroundColor: '#FF6C00',
    marginTop: 6,
    position: 'absolute',
  },
});
