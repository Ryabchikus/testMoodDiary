import {StyleSheet} from 'react-native';

import {Base} from '../../constants/colors';

export default StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    marginHorizontal: 14,
    marginTop: 28,
    marginBottom: 12,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    color: Base.GRAY_2,
    marginBottom: 2,
  },
  subTitleStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: Base.GRAY_1,
  },
});
