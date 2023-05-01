import { ViewStyle, ImageStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";
// import { ImageStyle } from "react-native-fast-image";
const { SH, SW } = theme.Size



interface globalStyleType {
  container: ViewStyle
  image: ImageStyle
  priceText: ViewStyle
  nameText: ViewStyle
  button: ViewStyle
  buttonText: ViewStyle
}
export default StyleSheet.create<globalStyleType>({
  container: {
    // height: 302* SH,
    minHeight: 302 * SH,
    maxHeight: 302 * SH,
    // width:"50%",

    marginLeft: 16 * SW,
    paddingHorizontal: 10 * SW,
    paddingVertical: 10 * SH,
    marginBottom: 14 * SH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    
    elevation: 19,

  },
  image: {
    height: 150 * SH,
    width: 150 * SW,

  },
  priceText: {
    paddingTop: 15 * SH,
    color: "rgba(42, 89, 254, 1)"

  },
  nameText: {
    paddingTop: 15 * SH,
    width: 150 * SW,
    height: 34 * SH,
    fontSize: 14,
  },
  button: {
    marginTop: 15 * SH,
    backgroundColor: "rgba(42, 89, 254, 1)",
    borderRadius: 4,
    height: 36 * SH,
  },
  buttonText: {
    color: '#FFFFFF'
  
  }



});