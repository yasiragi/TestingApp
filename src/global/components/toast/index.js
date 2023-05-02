import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAppState} from '../../../reduxStore/actions';
import globalStyles from '../../styles';

const Toast = () => {
  const {toastMessage, showToast} = useSelector(state => state.main);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        dispatch(
          updateAppState({
            showToast: false,
          }),
        );
      }, 3500);
    }
  }, [showToast]);
  if (!showToast) return null;
  return (
    <View style={globalStyles.toast}>
      <Text style={globalStyles.toastMessage}>{toastMessage}</Text>
    </View>
  );
};

export {Toast};
