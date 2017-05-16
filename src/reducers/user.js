import { createStore } from 'redux';

function user(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        ...action.payload,
        image: action.payload.images[0].url,
      };
    default:
      return state;
  }
}

export default user;
