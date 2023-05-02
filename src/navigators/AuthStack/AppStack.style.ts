import { ImageStyle, ViewStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";

interface globalStyleType {
  tabBarStyle: ViewStyle
  tabBarIconImage: ImageStyle
  tabBarIconImageAdd: ImageStyle
  tabBarIconContainer: ViewStyle
  iconBadge: ViewStyle

}
const { SH, SW } = theme.Size
export default StyleSheet.create<globalStyleType>({
  tabBarStyle: {
    position: 'absolute',
    height: 60 * SH,
    paddingHorizontal: 10 * SW,
  },
  tabBarIconImage: {
    resizeMode: 'contain',
    width: 30 * SW,
    height: 30 * SW
  },
  tabBarIconImageAdd: {
    resizeMode: 'contain',
    width: 80 * SW,
    height: 80 * SW,
    top: -20 * SW
  },
  tabBarIconContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconBadge: {
    position: 'absolute',
    left: -5,
    top: -10,
    zIndex: 99,
    width: 20 * SW,
    height: 20 * SW,
    overflow: 'hidden',
    borderRadius: 10 * SW,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: "red",
    color: "white",
    fontSize: 13 * SW,
    // lineHeight: Platform.OS == 'ios' ? 20 * SW : 15 * SW,
    fontFamily: 'SFProDisplay-Regular',
  }
});