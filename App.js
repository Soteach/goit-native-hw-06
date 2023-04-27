import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';
import db from './firebase/config';
import { useState } from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  const [user, setUser] = useState(null);

  db.auth().onAuthStateChanged(user => setUser(user));

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
