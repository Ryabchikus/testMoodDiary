import {StyleSheet} from 'react-native';

import {Base, Backgrounds} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Backgrounds.SCREENS,
  },
  moodsListContainer: {
    paddingHorizontal: 7,
  },
  moodItemActive: {
    backgroundColor: Base.PRIMARY,
  },
  iconStyleActive: {
    tintColor: Backgrounds.SCREENS,
  },
});
