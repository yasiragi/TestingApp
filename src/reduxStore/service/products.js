import {updateAppState} from '../actions';
import axios from './';

export const fetchProducts = productId => {
  return async dispatch => {
    dispatch(updateAppState({productLoading: true}));
    try {
      let url = 'products/products';
      if (productId) {
        url += `/${productId}`;
      }
      const response = await axios.get(url);
      if (response.data) {
        let stateObj = {
          productLoading: false,
        };
        if (productId) {
          stateObj['productDetail'] = response.data;
        } else {
          stateObj['products'] = response.data;
        }
        dispatch(updateAppState(stateObj));
      }
    } catch (error) {
      dispatch(updateAppState({productLoading: false}));
      alert('Unable to fetch Products');
    }
  };
};
