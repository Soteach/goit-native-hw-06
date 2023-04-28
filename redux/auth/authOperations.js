import db from '../../firebase/config';
import { authSlice } from './authReducer';

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db.auth().signInWithEmailAndPassword(email, password);

      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));

      console.log('user', user);
    } catch (error) {
      console.log('error.message', error.message);
    }
  };
export const authSignUpUser =
  ({ email, password, nickname }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch();
      console.log('email, password, nickname', email, password, nickname);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };
const authSignOutUser = () => async (dispatch, getState) => {};
