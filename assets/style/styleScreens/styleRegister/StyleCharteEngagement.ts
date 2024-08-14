import {StyleSheet} from 'react-native';

const StylesCharteEngagement = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    flex: 1,
  },
  TxtTitle: {
    top: 100,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center',
  },
  textWhite: {
    top: 20,
    color: '#fff',
    fontSize: 16,
    width: '90%',
    height: 110,
    fontFamily: 'Comfortaa',
    marginBottom: 50,
  },
  subTextWhite: {
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
  },
  textBtn: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    zIndex: 1,
    top: 20,
  },
  ViewModal: {
    top: 50,
    height: 850,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFF',
  },
  ViewModal2: {
    top: 50,
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewModal3: {
    bottom: 20,
    width: 151,
  },
  ViewModalCol: {
    top: 20,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ScrollViewModal: {
    height: 700,
  },
  ViewCharte: {
    top: 150,
    height: 500,
    width: '100%',
  },
  ScrollViewCharte: {
    bottom: 20,
    height: 250,
    width: '80%',
    alignSelf: 'center',
    paddingTop: 10,
  },
  TitleModal: {
    color: '#0F0BAE',
    bottom: 80,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
  },
  ImgVerif: {
    width: 151,
    height: 203,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: '#0F0BAE',
    borderRadius: 30,
  },
  IcoVerif: {
    position: 'absolute',
    bottom: 155,
    left: 15,
    width: 34,
    resizeMode: 'contain',
  },
  icoArrow: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    transform: [{rotate: '180deg'}],
  },
  textBlue: {
    width: '80%',
    color: '#0F0BAE',
    fontSize: 18,
    fontFamily: 'Comfortaa',
    textAlign: 'left',
    alignSelf: 'center',
  },
  textBlueBold: {
    color: '#0F0BAE',
    fontWeight: '800',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textBlueCenter: {
    color: '#0F0BAE',
    alignSelf: 'center',
    textAlign: 'center',
    width: 320,
    fontFamily: 'Comfortaa-Bold',
    fontSize: 18,
    top: 20,
  },
  textBtnModal: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa-Bold',
    zIndex: 1,
    top: 25,
    left: 15,
  },
  imgBtn: {
    bottom: 20,
    height: 56,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  rowModal: {
    flexDirection: 'row',
    top: 50,
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#0F0BAE',
    height: 2,
    width: '70%',
    alignSelf: 'center',
    margin: 15,
    top: 50,
  },
});

export default StylesCharteEngagement;
