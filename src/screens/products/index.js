import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../global/components';
import globalStyles from '../../global/styles';
import {fetchProducts} from '../../reduxStore/service/products';
import ProductItem from './productsItem';

const Products = props => {
  const {products = [], productLoading = false} = useSelector(
    state => state.main,
  );
  const dispatch = useDispatch();
  const _fetchProducts = () => {
    dispatch(fetchProducts());
  };

  useEffect(() => {
    _fetchProducts();
  }, []);

  return (
    <View style={[globalStyles.container]}>
      <Header title={'Products'} />
      <View style={[globalStyles.container, globalStyles.padding_h_5]}>
        <FlatList
          refreshing={productLoading}
          onRefresh={_fetchProducts}
          data={products}
          ItemSeparatorComponent={<View style={globalStyles.itemSeparator} />}
          renderItem={props => <ProductItem {...props} />}
        />
      </View>
    </View>
  );
};

export default Products;
