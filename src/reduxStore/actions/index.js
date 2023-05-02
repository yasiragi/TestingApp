import {UPDATE_APP_STATE, UPDATE_CART_STATE} from '../types';

export const updateAppState = data => {
  return {
    type: UPDATE_APP_STATE,
    payload: data,
  };
};

export const updateCartState = data => {
  return {
    type: UPDATE_CART_STATE,
    payload: data,
  };
};
