import { createStore } from 'redux';

const initialState = {
  id: null,
  displayName: null,
  email: null,
  accessToken: null,
  images: null,
  product: null,
  uri: null,
};

function user(state = {}, action) {
  return state;
}

const userStore = createStore(user, initialState);

export default userStore;
