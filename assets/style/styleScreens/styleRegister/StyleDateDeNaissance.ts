import {StyleSheet} from 'react-native';

const StylesDateDeNaissance = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  viewContent: {
    bottom: 40,
    flex: 6,
  },
  ViewText: {
    flex: 1,
  },
  TxtTitle: {
    top: 150,
    left: 40,
    color: '#FFF',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  ViewInputDate: {
    top: 80,
    alignSelf: 'center',
  },
  BtnPicker: {
    top: 150,
    width: 320,
    height: 140,
    borderRadius: 100,
    padding: 16,
    color: '#fff',
    borderColor: '#0F0BAE',
    borderWidth: 2,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlue: {
    color: '#0019A7',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textWhite: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textWhite1: {
    color: '#FFF',
    fontFamily: 'Comfortaa',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  textWhite2: {
    top: 300,
    left: 40,
    color: '#fff',
    fontSize: 12,
    width: '90%',
    height: 200,
    fontFamily: 'Comfortaa',
  },
  BoxInput: {
    top: 280,
    width: '90%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  BoxInputCol: {
    flexDirection: 'column',
    width: '100%',
    height: 160,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  BoxInputRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewTextError: {
    top: 40,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextError: {
    color: '#880808',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  ViewBtn: {
    flex: 1,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBtn: {
    height: 56,
    flexShrink: 0,
    alignSelf: 'center',
    resizeMode: 'contain',
    bottom: 17,
  },
  TxtBtn: {
    color: '#0F0BAE',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    top: 24,
    zIndex: 1,
  },
});

export default StylesDateDeNaissance;
