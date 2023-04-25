import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegistrationScreen from './screens/auth/RegisterScreen';
import CreatePostsScreen from './screens/mainScreen/CreatePostsScreen';
import Home from './screens/nestedScreens/Home';
import LoginScreen from './screens/auth/LoginScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';

import { Feather } from '@expo/vector-icons';
import LogoutBtn from './components/LogoutBtn';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        {/* <AuthStack.Screen
          options={{ headerShown: false }}
          name="CommentsScreen"
          component={CommentsScreen}
        /> */}
      </AuthStack.Navigator>
    );
  }
  return (
    <>
      <MainTab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 83,
            backgroundColor: '#fff',
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#212121',
          tabBarInactiveTintColor: '#212121',
          headerStyle: { backgroundColor: '#fff' },
          headerTitleAlign: 'center',
          // headerShadowVisible: false,
        }}
      >
        <MainTab.Screen
          options={{
            headerRight: () => <LogoutBtn />,
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <Feather name="grid" size={24} color={color} />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
        <MainTab.Screen
          options={{
            headerShown: false,
            headerTitle: 'Create Post',
            tabBarIcon: ({ focused, color }) => (
              <>
                {!focused && (
                  <View
                    style={{
                      width: 70,
                      height: 40,
                      backgroundColor: '#FF6C00',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Feather name="plus" size={24} color="#fff" />
                  </View>
                )}

                {focused && (
                  <View
                    style={{
                      width: 70,
                      height: 40,
                      backgroundColor: '#F6F6F6',
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Feather name="trash-2" size={24} color="#BDBDBD" />
                  </View>
                )}
              </>
            ),
          }}
          name="CreatePost"
          component={CreatePostsScreen}
        />
        <MainTab.Screen
          options={{
            headerShown: false,
            headerRight: () => <LogoutBtn />,
            tabBarIcon: ({ focused, color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
        {/* <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
          name="MapScreen"
          component={MapScreen}
        /> */}
      </MainTab.Navigator>
    </>
  );
};
