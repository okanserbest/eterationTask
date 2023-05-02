import { ImageStyle, ViewStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";
const { SH, SW } = theme.Size

interface globalStyleType {
  container: ViewStyle
  header: ViewStyle
  headerTitle: ViewStyle
  cardContainer: ViewStyle
  cardPriceText: ViewStyle
  amountContainer: ViewStyle
  amountText: ViewStyle
  actionButton: ViewStyle
  actionButtonText: ViewStyle
  addToCartButton: ViewStyle
  addToCartButtonText: ViewStyle
  priceText: ViewStyle
  priceTextBlack: ViewStyle

}
export default StyleSheet.create<globalStyleType>({
  container:{
    paddingBottom: 50 * SH
  },
  header: {
    height: SH * 49,
    backgroundColor: "#2A59FE"
  },
  headerTitle: {
    color: "white",
    paddingLeft: 16 * SW
  },
  cardContainer: {
    marginHorizontal: 15 * SW,
    marginTop: 15 * SH
  },
  cardPriceText: {
    color: "rgba(42, 89, 254, 1)"
  },
  amountContainer: {
    backgroundColor: "rgba(42, 89, 254, 1)",
    paddingVertical: 5 * SH,
    paddingHorizontal: 15 * SW,
  },
  amountText: {
    color: "white",
  },
  actionButton: {
    backgroundColor: "#E5E5E5",
    paddingVertical: 5 * SH,
    paddingHorizontal: 15 * SW,
  },
  actionButtonText: {
    color: "rgba(0, 0, 0, 1)"
  },
  addToCartButton: {
    backgroundColor: "#2A59FE",
    borderRadius: SW * 4,
  },
  addToCartButtonText: {
    color:"white",
    paddingVertical: SW * 8,
    paddingHorizontal: SH * 37,
    textAlign: "center",
  },
  priceText:{
    color:"#2A59FE"
  },
  priceTextBlack:{
    color:"black"
  }






});