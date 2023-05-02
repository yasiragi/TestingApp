import {UPDATE_APP_STATE} from '../types';

const initialState = {
  products: [],
  productDetails: {},
};

export default AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_APP_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
