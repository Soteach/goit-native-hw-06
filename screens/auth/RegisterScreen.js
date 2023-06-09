import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { authSignUpUser } from '../../redux/auth/authOperations';
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
} from 'react-native';

import { useDispatch } from 'react-redux';

const initialState = {
  email: '',
  password: '',
  nickname: '',
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setisShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setisShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    dispatch(authSignUpUser(state));
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback>
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
                marginBottom: isShowKeyboard ? 320 : 0,
              }}
            >
              <StatusBar style="auto" />
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
              <Text style={styles.regTitle}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                placeholder="Логін"
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => setisShowKeyboard(true)}
                value={state.nickname}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, nickname: value }))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={'#BDBDBD'}
                onFocus={() => setisShowKeyboard(true)}
                value={state.email}
                onChangeText={value =>
                  setstate(prevState => ({ ...prevState, email: value }))
                }
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor={'#BDBDBD'}
                  secureTextEntry={true}
                  onFocus={() => setisShowKeyboard(true)}
                  value={state.password}
                  onChangeText={value =>
                    setstate(prevState => ({ ...prevState, password: value }))
                  }
                />

                <Text style={styles.showPass}>Показати</Text>
              </View>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <Text style={styles.alreadyHaveText}>Маєте акаунт? Увійти</Text>
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
  regTitle: {
    fontSize: 30,
    color: '#212121',
    letterSpacing: 0.01,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 25,
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
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  alreadyHaveText: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 78,
  },
});
