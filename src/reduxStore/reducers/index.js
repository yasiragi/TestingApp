import {combineReducers} from 'redux';
import mainReducer from './mainReducer';
import cartReducer from './cartReducer';
const AppReducers = combineReducers({
  main: mainReducer,
  cart: cartReducer,
});
export default AppReducers;
