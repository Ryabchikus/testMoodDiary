import {StyleSheet} from 'react-native';

import {Base} from '../../constants/colors';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: Base.SECONDARY,
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 25,
  },
  disabledContainerStyle: {
    backgroundColor: Base.GRAY_3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: Base.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
