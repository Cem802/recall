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
    marginTop: 20,
  },
  labelcontainer: {
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
  label: {
    color: '#7468F3',
    fontSize: 14,
  },
  message: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 40,
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
