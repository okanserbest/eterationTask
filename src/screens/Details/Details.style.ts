import { ImageStyle, ViewStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";
const { SH, SW ,FULL_SW} = theme.Size

interface globalStyleType {
  header: ViewStyle
  headerTitle: ViewStyle
  headerIcon: ImageStyle
  productImage: ImageStyle
  productName: ViewStyle
  productDescription: ViewStyle
  addToCartButton: ViewStyle
  addToCartButtonText: ViewStyle
  priceText: ViewStyle
  priceTextBlack: ViewStyle

}
export default StyleSheet.create<globalStyleType>({
  header: {
    height: SH * 49,
    backgroundColor: "#2A59FE"
  },
  headerTitle: {
    color: "white",
  },
  headerIcon:{
    width: 21*SW,
    height: 21*SW,
    paddingLeft: SW*16
  },
  productImage: {
    width:360*SW,
    height:225*SH,
    alignSelf:'center',
    marginVertical:16*SH
  },
  productName: {
    alignSelf:'center',
    color:"black"
  },
  productDescription: {
    alignSelf:'center',
    color:"black",
    textAlign: 'justify'
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