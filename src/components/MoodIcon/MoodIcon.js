// @flow

import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import i18n from 'i18next';

import {MOOD_TYPES_ARR} from '../../constants/moodTypes';

import styles from './styles';

type Props = {
  moodKey: string,
  coverIcon?: number,
  containerStyle?: Object,
  iconContainerStyle?: Object,
  iconStyle?: Object,
  coverStyle?: Object,
  coverIconStyle?: Object,
  onPress?: Function,
  disabled?: boolean,
};

function getMoodIcon(key) {
  return MOOD_TYPES_ARR.find(st => st.key === key).icon;
}

export default function MoodIcon(props: Props) {
  const {
    moodKey,
    coverIcon,
    containerStyle = {},
    iconContainerStyle = {},
    iconStyle = {},
    coverIconStyle = {},
    onPress = () => null,
    disabled = true,
  } = props;

  function onPressItem() {
    onPress(moodKey);
  }

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
    <TouchableOpacity
      disabled={disabled}
      style={[styles.containerStyle, containerStyle]}
      onPress={onPressItem}>
      <View style={[styles.iconContainerStyle, iconContainerStyle]}>
        <Image
          source={getMoodIcon(moodKey)}
          style={[styles.iconStyle, iconStyle]}
        />
        {renderCoverIcon()}
      </View>
      <Text number0fLines={2} style={styles.moodItemTitle}>
        {i18n.t(moodKey)}
      </Text>
    </TouchableOpacity>
  );
}
