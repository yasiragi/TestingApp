import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../global/styles';
import {Colors} from '../../global/utils';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const _onItemPress = () => {
    navigation.navigate('productDetail', {item});
  };
  return (
    <TouchableOpacity
      onPress={_onItemPress}
      style={[styles.item, globalStyles.margin_h_10, globalStyles.margin_v_10]}>
      <Image source={{uri: item.img}} style={styles.image} />
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Color: {item.colour}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    backgroundColor: Colors.lightBg,
    borderRadius: 10,
    width: 140,
    height: 180,
    resizeMode: 'cover',
  },
  item: {
    flexDirection: 'row',
  },
});
export default ProductItem;
