import {StyleSheet} from 'react-native';

import {Base, Backgrounds, Borders} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Backgrounds.SCREENS,
    marginHorizontal: 7,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  iconContainerStyle: {
    marginRight: 13,
  },
  subMoodsContainer: {
    flex: 1,
    borderLeftColor: Borders.GRAY_BORDER_2,
    borderLeftWidth: 1,
    paddingHorizontal: 16,
  },
  subMood: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: Base.GRAY_4,
    marginRight: 8,
  },
  subMoodLabel: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: Base.GRAY_2,
    textTransform: 'capitalize',
  },
  subMoodValue: {
    fontSize: 10,
    lineHeight: 13,
    color: Base.GRAY_3,
    marginLeft: 14,
    marginTop: 1,
  },
  subMoodValueActive: {
    color: Base.BLACK,
  },
  editButton: {
    //
  },

  editIcon: {
    width: 24,
    height: 24,
  },
});
