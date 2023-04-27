import db from '../../firebase/config';

const authSignInUser = () => async (dispatch, getSatte) => {};
export const authSignUpUser =
  ({ email, password, nickname }) =>
  async (dispatch, getSatte) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log('email, password, nickname', email, password, nickname);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };
const authSignOutUser = () => async (dispatch, getSatte) => {};
