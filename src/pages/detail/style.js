import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '2.2%',
    backgroundColor: '#ffffff',
  },
  item: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    padding: 10,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 40,
  },
  name: {
    fontSize: 20,
  },
  tag: {
    fontSize: 18,
    color: '#28c551',
  },
  green: {
    color: '#28c551'
  },
  content: {
    paddingTop: 10,
    color: '#888',
    fontSize: 15,
    lineHeight: 22,
  },
  imgWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    margin: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 5
  }
});

export default styles