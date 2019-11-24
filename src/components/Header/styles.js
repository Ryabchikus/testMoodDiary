import {StyleSheet} from 'react-native';

import {Borders, Base} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    borderBottomColor: Borders.GRAY_BORDER,
    borderBottomWidth: 1,
  },
  titles: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  buttonsWrapper: {
    minWidth: 24,
    flexDirection: 'row',
    marginRight: 6,
  },
  title: {
    color: Base.GRAY_2,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
});
