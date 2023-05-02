import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../global/components';
import globalStyles from '../../global/styles';
import {Colors} from '../../global/utils';
import {updateAppState, updateCartState} from '../../reduxStore/actions';
import {fetchProducts} from '../../reduxStore/service/products';

const ProductDetail = props => {
  const navigation = useNavigation();
  const productDetail = props.route.params.item || {};
  const {productLoading} = useSelector(state => state.main);
  const {cartProducts = []} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const _fetchProductDetail = () => {
    // dispatch(fetchProducts(selectedProduct.id));
  };

  useEffect(() => {
    /* if (selectedProduct) {
      _fetchProductDetail();
    } */
  }, []);

  const _addItemToCart = () => {
    let productFound = false;
    const _cartProducts = cartProducts.map(i => {
      if (i.id === productDetail.id) {
        productFound = true;
        i.quantity++;
        dispatch(
          updateAppState({
            showToast: true,
            toastMessage: 'Product Updated in Cart',
          }),
        );
      }
      return i;
    });
    if (!productFound) {
      _cartProducts.push({...productDetail, quantity: 1});
      dispatch(
        updateAppState({
          showToast: true,
          toastMessage: 'Product Added to Cart',
        }),
      );
    }
    dispatch(updateCartState({cartProducts: _cartProducts}));
  };

  return (
    <View style={[globalStyles.container]}>
      <Header showBack title={'Products Detail'} />
      <View style={[globalStyles.container, globalStyles.padding_h_5]}>
        <ScrollView>
          {productLoading && <ActivityIndicator size={'large'} />}
          {!productLoading && productDetail && (
            <View style={[globalStyles.padding_h_5, globalStyles.margin_v_10]}>
              <Image
                style={[styles.productImage]}
                source={{uri: productDetail?.img}}
              />
              <Text style={[styles.detailText, styles.title]}>
                {productDetail.name}
              </Text>
              <Text style={styles.detailText}>
                Color: {productDetail.colour}
              </Text>
              <Text style={[styles.detailText, globalStyles.margin_b_10]}>
                Price: {productDetail.price}
              </Text>
              <Button onPress={_addItemToCart} title="ADD TO CART" />
            </View>
          )}
          <View style={globalStyles.margin_t_10} />
          <Button
            color={Colors.red}
            onPress={() => navigation.navigate('cart')}
            title="GO TO CART"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  detailText: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 15,
  },
  productImage: {
    backgroundColor: Colors.headerBg,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 20,
    width: '70%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default ProductDetail;
