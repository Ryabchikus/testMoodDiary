import {StyleSheet} from 'react-native';

import {Base, Borders} from '../../constants/colors';

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: 12,
    borderBottomColor: Borders.GRAY_BORDER_2,
    borderBottomWidth: 1,
    marginTop: 12,
    paddingBottom: 26,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: Base.GRAY_2,
    marginBottom: 2,
  },
  subTitleStyle: {
    color: Base.GRAY_3,
    marginBottom: 13,
  },
  sliderContainer: {
    flex: 1,
    marginBottom: 26,
  },
  slider: {
    flex: 1,
    height: 26,
    ...StyleSheet.absoluteFill,
  },
  sliderBackgroundContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 12,
    left: 11,
    right: 11,
  },
  sliderBackgroundItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Base.GRAY_1,
    height: 3,
    borderRadius: 1,
    marginHorizontal: 2,
  },
});
