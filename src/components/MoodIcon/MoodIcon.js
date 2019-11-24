// @flow

import React from 'react';
import {Image, View} from 'react-native';

import MOOD_TYPES from '../../constants/moodTypes';

import styles from './styles';

type Props = {
  moodKey: string,
  coverIcon?: number,
  containerStyle?: Object,
  iconStyle?: Object,
  coverStyle?: Object,
  coverIconStyle?: Object,
};

function getMoodIcon(key) {
  return MOOD_TYPES.find(st => st.key === key).icon;
}

export default function MoodIcon(props: Props) {
  const {
    moodKey,
    coverIcon,
    containerStyle = {},
    iconStyle = {},
    coverIconStyle = {},
  } = props;

  function renderCoverIcon() {
    if (coverIcon) {
      return (
        <Image
          source={coverIcon}
          style={[styles.coverIconStyle, coverIconStyle]}
        />
      );
    }
    return null;
  }

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Image
        source={getMoodIcon(moodKey)}
        style={[styles.iconStyle, iconStyle]}
      />
      {renderCoverIcon()}
    </View>
  );
}
