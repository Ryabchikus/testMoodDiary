import {StyleSheet} from 'react-native';

import {Base, Backgrounds} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Backgrounds.SCREENS,
  },
  moodsListContainer: {
    padding: 16,
    paddingBottom: 0,
    paddingLeft: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  moodItemContainer: {
    width: 73,
    height: 93,
    alignItems: 'center',
 },
  moodItem: {
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  moodItemActive: {
    backgroundColor: Base.PRIMARY,
  },
  moodItemTitle: {
    textAlign: 'center',
    color: Base.BLACK,
    fontSize: 10,
    lineHeight: 13,
  },

  iconStyleActive: {
    tintColor: Backgrounds.SCREENS,
  },
});
