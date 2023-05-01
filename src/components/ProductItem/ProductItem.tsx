import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks';
import styles from './ProductItem.style';
import { Product } from 'eterationTask/@types/product';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { addCart } from 'eterationTask/src/store/cart';


type Props = {
  data: Product
};

const ProductItem = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { Layout, Images,FontSize ,Fonts} = useTheme();
  const { image, name, price, id, brand } = data;
  return (
    <View style={styles.container} >
      

      <Image
        style={[styles.image, Layout.alignItemsCenter,Layout.justifyContentCenter,Layout.center]}
        source={{
          uri: `${image}.png`,
        }}
      />
      <Text style={[Fonts.textSmall,styles.priceText]}>{price} </Text>
      <Text style={[styles.nameText]}>{brand} {name}</Text>
      <TouchableOpacity
       style={[styles.button,Layout.alignItemsCenter,Layout.justifyContentCenter,Layout.center]}
        onPress={() => {dispatch(addCart(id))}}
       >
        <Text style={[Fonts.textSmall,styles.buttonText]}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

ProductItem.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default ProductItem;
