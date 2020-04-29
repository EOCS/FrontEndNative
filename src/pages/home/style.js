import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  },
  btmBtn: {
    position: 'absolute',
    bottom: 40, 
    left: '50%',
    width: 60,
    height: 60,
    backgroundColor: '#108ee9',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 60,
    marginLeft: -30,
    fontSize: 50,
    borderRadius: 60,
    zIndex: 2,
  },
  rightBtn: {
    position: 'absolute',
    top: -48,
    right: 10,
    zIndex: 2,
  },
  rightBtnImg: {
    width: 40,
    height: 40,
  },
  scrolView: {
    width: '100%',
    padding: '2.2%',
  }
});

export default styles