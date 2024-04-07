import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messageslist: {
    padding: 10,
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 20,
  },
  fromcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: '#787A91',
    padding: 5,
    borderRadius: 50,
    marginRight: 10,
  },
  from: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 50,
  },
  emptyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
