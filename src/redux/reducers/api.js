import { API_LOADING, API_FINISHED } from '../actions/api';

const initialState = {
  isLoading: false,
};
// With this middleware architecture, reducers can be very clean.
const apiReducer = (state = initialState, action) => {
  if (action.type.includes(API_LOADING)) {
    return { ...state, isLoading: true };
  }
  if (action.type.includes(API_FINISHED)) {
    return { ...state, isLoading: false };
  }
  return state;
};

export default apiReducer;
