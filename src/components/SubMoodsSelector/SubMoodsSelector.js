// @flow

import React from 'react';
import {View, Text} from 'react-native';
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
            onValueChange={handleSetSubMood}
          />
          <View style={styles.sliderBackgroundContainer}>
            {INTENSITY_COLORS.slice(1).map((color, index) => (
              <View
                key={color}
                style={[
                  styles.sliderBackgroundItem,
                  index <= subMood.intensity - 1
                    ? {backgroundColor: color}
                    : null,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
    );
  });
}
