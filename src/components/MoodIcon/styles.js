import {StyleSheet} from 'react-native';

import {Base} from '../../constants/colors';

export default StyleSheet.create({
  containerStyle: {
    width: 73,
    height: 93,
    alignItems: 'center',
  },
  iconContainerStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Base.PRIMARY,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  coverIconStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  moodItemTitle: {
    textAlign: 'center',
    color: Base.BLACK,
    fontSize: 10,
    lineHeight: 13,
    marginTop: 3,
  },
});
