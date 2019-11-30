// @flow

import React from 'react';
import {View, Text, Platform} from 'react-native';
import Slider from '@react-native-community/slider';
import i18n from 'i18next';

import {INTENSITY_NAMES, INTENSITY_COLORS} from '../../constants/moodTypes';

import styles from './styles';

type Props = {
  onSetSubMood: Function,
  subMoods: Array,
};

export default function SubMoodSelector(props: Props) {
  const {onSetSubMood, subMoods} = props;
  const isAndroid = Platform.OS === 'android';

  function renderBackGround(subMood) {
    return (
      <View style={styles.sliderBackgroundContainer}>
        {INTENSITY_COLORS.slice(1).map((color, index) => (
          <View
            key={color}
            style={[
              styles.sliderBackgroundItem,
              index <= subMood.intensity - 1 ? {backgroundColor: color} : null,
            ]}
          />
        ))}
      </View>
    );
  }

  return subMoods.map((subMood, subMoodIndex) => {
    const currentColor = INTENSITY_COLORS[subMood.intensity];
    const handleSetSubMood = value => onSetSubMood(subMoodIndex, value);

    return (
      <View key={subMood.subMoodKey} style={styles.containerStyle}>
        <Text style={styles.textStyle}>{`${i18n.t('valueOf')} ${i18n.t(
          subMood.subMoodKey,
          {count: 2},
        )}`}</Text>
        <Text
          style={[
            styles.textStyle,
            styles.subTitleStyle,
            subMood.intensity ? {color: currentColor} : null,
          ]}>
          {i18n.t(INTENSITY_NAMES[subMood.intensity])}
        </Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={INTENSITY_NAMES.length - 1}
            step={1}
            value={subMood.intensity}
            minimumTrackTintColor="transparent"
            maximumTrackTintColor="transparent"
            thumbTintColor={currentColor}
            onValueChange={handleSetSubMood}>
            {/* workaround for suppression of the popping background image to the foreground */}
            {!isAndroid ? renderBackGround(subMood) : null}
          </Slider>
          {isAndroid ? renderBackGround(subMood) : null}
        </View>
      </View>
    );
  });
}
