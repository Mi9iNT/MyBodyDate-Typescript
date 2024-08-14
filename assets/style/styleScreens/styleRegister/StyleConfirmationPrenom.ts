import {StyleSheet} from 'react-native';

const StylesConfirmationPrenom = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    flex: 1,
  },
  ViewText: {
    top: 50,
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    flex: 6,
  },
  TxtTitle: {
    top: 150,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  ViewInputPrenom: {
    flex: 2,
    width: '100%',
    top: 280,
    alignSelf: 'center',
  },
  textWhite: {
    bottom: 100,
    left: 40,
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
  },
  textBlue: {
    top: 20,
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
    fontWeight: '700',
  },
  Btn: {
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  TxtBtn: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    zIndex: 1,
    top: 40,
  },
  ImgBtn: {
    height: 56,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  // Modal
  ViewModal: {
    flex: 1,
    top: 350,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  BtnCloseModal: {
    bottom: 200,
    backgroundColor: 'transparent',
    height: '34%',
    width: '100%',
    position: 'absolute',
  },
  icoModal: {
    width: 70,
    height: 70,
    bottom: 250,
    resizeMode: 'contain',
  },
  ViewTextModal: {
    bottom: 180,
    width: '80%',
    alignSelf: 'center',
  },
  ViewModalCol: {
    flexDirection: 'column',
    height: 140,
    justifyContent: 'space-between',
  },
  ViewModalRow: {
    flexDirection: 'row',
  },
  titleModal: {
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 100,
  },
  textModalBlue: {
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    bottom: 200,
  },
  textModalBlue2: {
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    bottom: 160,
  },
  ViewBtnModalRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 50,
  },
  ImgBtnModal: {
    width: 150,
    height: 56,
    resizeMode: 'contain',
  },
  ImgBtnModal2: {
    width: 150,
    height: 56,
    resizeMode: 'contain',
  },
  TextBtnModal: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    zIndex: 2,
    top: 42,
  },
  TextBtnModal2: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    zIndex: 2,
    top: 42,
  },
});

export default StylesConfirmationPrenom;
