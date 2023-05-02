import {UPDATE_CART_STATE} from '../types';

const initialState = {
  cartProducts: [],
};

export default CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_STATE:
      console.log('payload', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
