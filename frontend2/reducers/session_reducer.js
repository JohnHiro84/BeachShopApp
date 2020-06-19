import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let new_user = action.currentUser;
      let new_state = { id: new_user.id, username: new_user.username };
      return merge({}, state, new_state);
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
