import {StyleSheet} from 'react-native';

import {Borders, Base} from '../../constants/colors';

export default StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: Borders.GRAY_BORDER,
    borderBottomWidth: 1,
    padding: 8,
    height: 40,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: Base.GRAY_2,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonsWrapper: {
    minWidth: 24,
    flexDirection: 'row',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
});
