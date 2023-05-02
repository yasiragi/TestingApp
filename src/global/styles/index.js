import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../utils';
const {width} = Dimensions.get('window');
const globalStyles = StyleSheet.create({
  errorMessageText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.red,
    paddingVertical: 15,
  },
  container: {
    flex: 1,
  },
  itemSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.separatorColor,
    marginVertical: 10,
  },
  margin_h_5: {
    marginHorizontal: 5,
  },
  margin_h_10: {
    marginHorizontal: 10,
  },
  margin_v_10: {
    marginVertical: 10,
  },
  padding_h_5: {
    paddingHorizontal: 5,
  },
  margin_t_10: {
    marginTop: 10,
  },
  margin_b_10: {
    marginBottom: 10,
  },
  padding_5: {
    padding: 5,
  },
  toastMessage: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white,
    paddingVertical: 10,
  },
  toast: {
    position: 'absolute',
    bottom: 30,
    left: 25,
    borderRadius: 10,
    backgroundColor: Colors.headerBg,
    justifyContent: 'center',
    width: width - 50,
    zIndex: 999,
  },
});

export default globalStyles;
