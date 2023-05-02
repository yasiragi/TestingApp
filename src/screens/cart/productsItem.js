import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../global/styles';
import {Colors} from '../../global/utils';

const ProductItem = ({item, index, onItemPress}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.item, globalStyles.margin_h_10, globalStyles.margin_v_10]}>
      <Image source={{uri: item.img}} style={styles.image} />
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onItemPress('add', index)}>
          <Text>+</Text>
        </TouchableOpacity>
        <Text>Quantity: {item.quantity}</Text>
        <TouchableOpacity
          onPress={() =>
            onItemPress(item.quantity === 1 ? 'delete' : 'sub', index)
          }>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onItemPress('delete', index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
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
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  item: {
    flexDirection: 'row',
  },
});
export default ProductItem;
