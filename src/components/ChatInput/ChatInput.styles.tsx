import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
  },
  input: {
    flex: 3,
    height: 40,
    borderWidth: 1,
    borderColor: '#535465',
    borderRadius: 40,
    color: '#787A91',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    overflow: 'hidden',
  },
  button: {
    height: 35,
    width: 35,
    backgroundColor: '#7468F3',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2.5,
  },
});
