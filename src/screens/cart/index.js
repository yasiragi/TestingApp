import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../global/components';
import globalStyles from '../../global/styles';
import {updateCartState} from '../../reduxStore/actions';
import {fetchProducts} from '../../reduxStore/service/products';
import ProductItem from './productsItem';

const Cart = props => {
  const navigation = useNavigation();
  const {cartProducts} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const _updateCart = (type, index) => {
    let _cartProducts = [...cartProducts];
    if (type === 'add' || type === 'sub') {
      if (_cartProducts[index]) {
        if (type === 'add') _cartProducts[index].quantity++;
        else _cartProducts[index].quantity--;
      }
    } else {
      _cartProducts.splice(index, 1);
    }
    dispatch(updateCartState({cartProducts: _cartProducts}));
  };

  return (
    <View style={[globalStyles.container]}>
      <Header showBack title={'Cart'} />
      <View style={[globalStyles.container, globalStyles.padding_5]}>
        <FlatList
          ListEmptyComponent={
            <Text style={globalStyles.errorMessageText}>No Items in Cart</Text>
          }
          data={cartProducts}
          ItemSeparatorComponent={<View style={globalStyles.itemSeparator} />}
          renderItem={props => (
            <ProductItem onItemPress={_updateCart} {...props} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    alignSelf: 'center',
    width: '90%',
    height: 500,
    resizeMode: 'contain',
  },
});

export default Cart;
