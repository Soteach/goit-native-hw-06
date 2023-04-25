import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}

// const AuthStack = createNativeStackNavigator();
// const MainTab = createBottomTabNavigator();

// const useRoute = isAuth => {
//   if (!isAuth) {
//     <AuthStack.Navigator>
//       <AuthStack.Screen
//         options={{ headerShown: false }}
//         name={'Login'}
//         component={LoginScreen}
//       />
//       <AuthStack.Screen
//         name={'Register'}
//         component={RegisterScreen}
//         options={{ headerShown: false }}
//       />
//     </AuthStack.Navigator>;
//   }
//   return (
//     <MainTab.Navigator>
//       <MainTab.Screen name={'Posts'} component={PostsScreen} />
//       <MainTab.Screen name={'Create'} component={CreatePostsScreen} />
//       <MainTab.Screen name={'Profile'} component={ProfileScreen} />
//     </MainTab.Navigator>
//   );
// };

// export default function App() {
//   const [iasReady, setIasReady] = useState(false);
//   const routing = useRoute(null);

//   if (!iasReady) {
//     return (
//       <AppLoading
//         startAsync={loadApplication}
//         onFinish={() => setIasReady(true)}
//         onError={console.warn}
//       />
//     );
//   }

//   return (
//     <>
//       <NavigationContainer>{routing}</NavigationContainer>
//       {/* <ProfileScreen /> */}
//       {/* <CommentsScreen /> */}
//       {/* <PostsScreen /> */}
//       {/* <CreatePostsScreen /> */}
//       {/* <Home /> */}
//     </>
//   );
// }
