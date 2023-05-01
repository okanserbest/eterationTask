import { ImageStyle, ViewStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";
const { SH, SW } = theme.Size

interface globalStyleType {
  header: ViewStyle
  headerTitle: ViewStyle
  searchSection: ViewStyle
  searchIcon: ImageStyle
  input: ViewStyle
  filterText: ViewStyle
  filterButton: ViewStyle
  filterSection: ViewStyle

}
export default StyleSheet.create<globalStyleType>({
  header: {
    height: SH * 49,
    backgroundColor: "#2A59FE"
  },
  headerTitle: {
    color: "white",
    paddingLeft: 16 * SW
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    height: SH * 40,
    marginTop: SH * 14,
    marginHorizontal: 14*SW
  },
  searchIcon: {
    width: 16.5 * SW, 
    height: 17.5 * SW,
    margin: 15,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: 'black',
    fontSize: 14,
  },

  filterSection: {
    marginTop: SH * 14,
    marginBottom: SH * 14,
    marginHorizontal: 16*SW,
    height:36*SH,
    
  },
  filterText:{
    fontSize:18,
  },
  filterButton:{
    backgroundColor:"#D9D9D9",
    paddingHorizontal:38*SW,
    paddingVertical:8*SH,
  },


});