import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import styles from './Cart.style';
import { useDispatch, useSelector } from 'react-redux';
import { complateCart, decreaseAmount, increaseAmount } from 'eterationTask/src/store/cart';


const CardContainer = ({ product, amount }: any) => {
  const {
    Fonts,
    Layout,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={[Layout.row, Layout.justifyContentBetween, Layout.alignItemsCenter, styles.cardContainer]}>
      <View>
        <Text style={[Fonts.textSmall]}>{product?.name}</Text >
        <Text style={[Fonts.textTiny, styles.cardPriceText]} >{`${product?.price}₺`}</Text>
      </View>

      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <TouchableOpacity style={[styles.actionButton]} onPress={() => { dispatch(decreaseAmount(product?.id)) }}>
          <Text style={[styles.actionButtonText]} > {"-"} </Text>
        </TouchableOpacity>
        <View style={[styles.amountContainer]}>
          <Text style={[Fonts.textTiny, styles.amountText]}> {amount.toString()} </Text>

        </View>
        <TouchableOpacity style={[styles.actionButton]} onPress={() => { dispatch(increaseAmount(product?.id)) }}>
          <Text style={[styles.actionButtonText]}> {"+"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Cart = () => {
  const {
    Fonts,
    Gutters,
    Layout,
  } = useTheme();
  const dispatch = useDispatch();
  // const allProducts = useSelector((state: any) => state.products).responceProduct
  const allProducts = useSelector((state: any) => state.products).responceProduct
  const card = useSelector((state: any) => state.carts).Carts.map((item: any) => {
    const product = allProducts.find((product: any) => product?.id == item?.productId)
    return { product, amount: item?.amount }
  });


  const totalPrice = card.reduce((acc: any, item: any) => {
    return acc + item.amount * item.product.price;
  }, 0)

  if (card.length == 0) {
    return (
      <View style={[Layout.fill, Layout.fullSize, Layout.justifyContentBetween]}>
        <Text>Cart is Empty</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={[Layout.fill, Layout.fullSize, Layout.justifyContentBetween, styles.container]}>
      <View>
        <View style={[styles.header, Layout.fullWidth]}>
          <Text style={[Fonts.titleSmall, styles.headerTitle, Layout.alignItemsStart]}>E-Market</Text>
        </View>
        {card.map((item: any) => { return <CardContainer product={item?.product} amount={item?.amount} /> })}
      </View>

      <View style={[Layout.alignItemsEnd, Layout.justifyContentBetween, Layout.row, Gutters.smallHMargin, Gutters.smallVMargin]}>
        <View>
          <Text style={[Fonts.textRegular, Fonts.textTiny, styles.priceText]}>Totel amaount:</Text>
          <Text style={[Fonts.textRegular, Fonts.textBold, styles.priceTextBlack]} >{`${totalPrice}₺`}</Text>
        </View>

        <TouchableOpacity style={[styles.addToCartButton]} onPress={() => { dispatch(complateCart())}}>
          <Text style={[styles.addToCartButtonText]} >{"Complate"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
