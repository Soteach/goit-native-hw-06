import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import * as Font from 'expo-font';

const loadApplication = async () => {
  await Font.loadAsync({
    RobotoThin: require('../../assets/fonts/Roboto-Thin.ttf'),
    RobotoRegular: require('../../assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
  });
};

export default function CommentsScreen() {
  return (
    <View style={styles1.container}>
      <View style={styles1.header}>
        <Image
          style={styles1.arrowBack}
          source={require('../../assets/icons/arrow-left.png')}
        />
        <Text style={styles1.title}>Коментарі</Text>
      </View>
      <View style={styles1.imageWrap}>
        <View style={styles1.imageTemplate}></View>
      </View>
      <View style={styles1.commentsFeed}>
        <View style={styles1.commentRight}>
          <Image
            style={styles1.avatarRight}
            source={require('../../assets/icons/Ellipse.png')}
          />
          <View style={styles1.commentGroupRight}>
            <Text style={styles1.comment}>
              Really love your most recent photo. I've been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles1.commentTimeRight}>
              09 червня, 2020 | 08:40
            </Text>
          </View>
        </View>
        <View style={styles1.commentLeft}>
          <View style={styles1.commentGroupLeft}>
            <Text style={styles1.comment}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={styles1.commentTime}>09 червня, 2020 | 09:14</Text>
          </View>
          <Image
            style={styles1.avatarLeft}
            source={require('../../assets/icons/Ellipse2.png')}
          />
        </View>
        <View style={styles1.commentRight}>
          <Image
            style={styles1.avatarRight}
            source={require('../../assets/icons/Ellipse.png')}
          />
          <View style={styles1.commentGroupRight}>
            <Text style={styles1.comment}>
              Thank you! That was very helpful!
            </Text>
            <Text style={styles1.commentTimeRight}>
              09 червня, 2020 | 09:20
            </Text>
          </View>
        </View>
      </View>
      <View style={styles1.addComment}>
        <TextInput style={styles1.input} placeholder="Додати коментар..." />
        <TouchableOpacity style={styles1.btn}>
          <Image
            style={styles1.icon}
            source={require('../../assets/icons/Vector.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    marginHorizontal: 16,
  },
  header: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 0,
    elevation: 1,
    marginBottom: 32,
    position: 'relative',
    paddingTop: 27,
    paddingBottom: 11,
  },
  arrowBack: {
    position: 'absolute',
    left: 0,
    width: 24,
    height: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '500',
  },
  imageWrap: {
    marginBottom: 32,
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
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentsFeed: {
    marginRight: 32,
  },
  commentRight: {
    // flexDirection: 'row',

    marginBottom: 24,
  },
  commentLeft: {
    // flexDirection: 'row',
    marginBottom: 24,
  },
  avatarRight: {
    marginRight: 16,
  },
  avatarLeft: { marginLeft: 16 },
  commentGroupRight: {
    // flexDirection: 'column',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  commentGroupLeft: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  comment: {
    fontSize: 13,
    // lineHeight: 1.38,
    color: '#212121',
    marginBottom: 8,
  },
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
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    backgroundColor: '#FF6C00',
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
});
