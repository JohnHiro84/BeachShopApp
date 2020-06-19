import merge from 'lodash/merge';

import {ADD_TERM_TO_STORE, CLEAR_TERM } from '../actions/search_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const defaultState = {
  term: ""
}

const searchReducer = (oldState = defaultState, action) => {

  let term;
  switch (action.type) {

    case ADD_TERM_TO_STORE:

      let term = action.term;
      return { term: action.term }

    case CLEAR_TERM:

      return defaultState;

    case LOGOUT_CURRENT_USER:

          return defaultState;

    default:
      return oldState;
  }
};

export default searchReducer;
