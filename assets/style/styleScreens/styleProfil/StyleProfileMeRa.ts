import {StyleSheet} from 'react-native';
const StylesProfileMeRa = StyleSheet.create({
  bgGradient: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    top: 10,
    justifyContent: 'space-between',
    height: 160,
  },
  viewCol: {
    flexDirection: 'column',
    left: 20,
  },
  viewCol2: {
    flexDirection: 'column',
    bottom: 140,
    left: 125,
  },
  viewCol3: {
    height: 130,
    width: 200,
    top: 0,
    right: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewCol4: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  userAvatar: {
    width: 115,
    height: 115,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: '#0019A7',
  },
  userId: {
    fontSize: 15,
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    top: 15,
    color: '#0019A7',
  },
  userQuality: {
    width: 30,
    height: 30,
  },
  userMedaille: {
    left: 20,
    width: 30,
    height: 44,
  },
  userName: {
    fontFamily: 'Comfortaa-Bold',
    color: '#0019A7',
    fontSize: 24,
    top: 5,
  },
  userBC: {
    fontFamily: 'Comfortaa-Bold',
    color: '#0019A7',
    fontSize: 16,
    top: 5,
  },
  boxEditBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    height: 24,
    top: 25,
  },
  imgEditBtn: {
    resizeMode: 'contain',
    width: 96,
    height: 24,
    top: 10,
  },
  txtEditBtn: {
    color: '#fff',
    fontSize: 15,
    bottom: 12,
  },
  boxBtn: {
    width: 30,
    height: 30,
  },
  icoBtn: {
    width: 30,
    height: 30,
  },
  txtBtn: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    color: '#0019A7',
    fontSize: 18,
    left: 35,
    bottom: 40,
  },
  boxVocal: {
    top: 100,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  txtVocal: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: '700',
    color: '#0019A7',
    fontSize: 15,
    top: 2,
  },
  imgVocal: {
    width: 100,
    height: 30,
  },
  boxPass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 10,
    top: 120,
  },
  imgPass: {
    width: 55,
    height: 55,
    bottom: 10,
  },
  txtPass: {
    fontFamily: 'Comfortaa',
    fontWeight: '700',
    color: '#0019A7',
    fontSize: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#0019A7',
  },
  scrollView: {
    top: 120,
    maxHeight: 350,
  },
  boxOffre: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 151,
    right: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0019A7',
    padding: 5,
    marginBottom: 20,
  },
  boxOffre2: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 151,
    right: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0019A7',
    padding: 30,
    marginBottom: 20,
  },
  boxOffre3: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 151,
    right: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0019A7',
    padding: 30,
    marginBottom: 20,
  },
  titleOffre: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    top: 20,
  },
  txtTitle1: {
    color: '#FF84D7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    right: 5,
  },
  txtTitle12: {
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    left: 5,
  },
  txtTitle13: {
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
    bottom: 30,
  },
  txtTitle2: {
    color: '#FF84D7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  txtTitle22: {
    textAlign: 'center',
    fontFamily: 'Comfortaa',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  txtTitle3: {
    color: '#FF84D7',
    textAlign: 'center',
    fontFamily: 'Gilroy',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  viewPhoto: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    columnGap: 30,
    rowGap: 30,
    flexBasis: 100,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '98%',
    height: 129,
    top: 80,
  },
  viewPhoto2: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    rowGap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '98%',
    height: 129,
    top: 80,
  },
  btnAddPhoto: {
    borderRadius: 30,
    borderColor: '#E0BDFF',
    borderWidth: 1,
    width: 82,
    height: 82,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddPhoto2: {
    borderRadius: 30,
    borderColor: '#D40000',
    borderWidth: 1,
    width: 82,
    height: 82,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewUserPhoto: {
    top: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPhoto: {
    borderRadius: 30,
    resizeMode: 'contain',
  },
  contentDeleteImage: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
  },
  imageDelete: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  txtAddImage: {
    fontFamily: 'Comfortaa',
    fontWeight: '500',
    fontSize: 36,
    color: 'black',
  },
  txtAddImage2: {
    fontFamily: 'Comfortaa',
    fontWeight: '500',
    fontSize: 36,
    color: '#D40000',
  },
});

export default StylesProfileMeRa;
