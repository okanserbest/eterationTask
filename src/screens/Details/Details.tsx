import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Details.style";
import { addCart } from 'eterationTask/src/store/cart';

const Details = ({ route }) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
    Size
  } = useTheme();
  const dispatch = useDispatch();
  const { id } = route.params
  const showData = useSelector((state: any) => state.products).responceProduct.find((item: any) => item.id == id)

 
  const { image, name, brand, description, price } = showData


  const navigation = useNavigation()
  return (
    <SafeAreaView style={[Layout.fill, Layout.fullSize, Layout.justifyContentBetween]}>
      <View>

        <View style={[styles.header, Layout.row, Layout.alignItemsCenter, Layout.justifyContentBetween]}>
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
            <Image style={styles.headerIcon} source={Images.icons.back} />
          </TouchableOpacity>
          <View style={[Layout.fill]}>
            <Text style={[Fonts.textRegular, Fonts.textCenter, Fonts.textBold, Layout.alignItemsCenter, Layout.colCenter, styles.headerTitle]}>{brand}</Text>
          </View>
        </View>
        <Image source={{
          uri: `${image}.png`,
        }}
          style={styles.productImage} />
        <View style={[Layout.row, Layout.colCenter, Gutters.smallHMargin]}>
          <Text style={[Fonts.textRegular, Fonts.textBold, Layout.alignItemsCenter, Layout.colCenter, styles.productName]}>
            {`${brand} ${name}`}</Text>
        </View>
        <View style={[Layout.row, Layout.colCenter, Gutters.smallHMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textBold, Layout.alignItemsCenter, Layout.colCenter, styles.productDescription]}>
            {`${description}`}</Text>
        </View>

      </View>



      <View style={[ Layout.alignItemsEnd, Layout.justifyContentBetween, Layout.row, Gutters.smallHMargin, Gutters.smallVMargin]}>
        <View style={[]}>
          <Text style={[Fonts.textRegular, Fonts.textTiny,styles.priceText]}>Price:</Text>
          <Text style={[Fonts.textRegular, Fonts.textBold,styles.priceTextBlack]}>{`${price}₺`}</Text>

        </View>
        <View>
          {/* <Text style={[Fonts.textRight]}>oooo</Text> */}
          <TouchableOpacity style={[styles.addToCartButton]} onPress={() => {dispatch(addCart(id)) ;navigation.goBack()}}>
            <Text style={[styles.addToCartButtonText]}>Add to cart</Text>
            </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default Details;
