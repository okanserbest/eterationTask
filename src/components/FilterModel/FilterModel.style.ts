import { ViewStyle, ImageStyle } from "react-native/types";
import { StyleSheet } from 'react-native';
import theme from "eterationTask/src/theme/Variables";
// import { ImageStyle } from "react-native-fast-image";
const { SH, SW ,FULL_SH,FULL_SW} = theme.Size

export default StyleSheet.create<any>({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: FULL_SW,
    height: FULL_SH,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: '#2196F3',
    position: 'absolute',
    left: 20*SW,
    top: 20*SH
  },
  textCloseStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  }

)