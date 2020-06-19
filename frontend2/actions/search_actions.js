
export const ADD_TERM_TO_STORE = "ADD_TERM_TO_STORE";
export const CLEAR_TERM = "CLEAR_TERM";

export const receiveSearchTerm = term => ({
  type: ADD_TERM_TO_STORE,
  term
});

export const clearTerm = () => ({
  type: CLEAR_TERM
});
