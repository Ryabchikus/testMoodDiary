// @flow

import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import i18n from 'i18next';

import {Interface} from '../../constants/graphics';
import {INTENSITY_NAMES, INTENSITY_COLORS} from '../../constants/moodTypes';

import styles from './styles';
import MoodIcon from '../MoodIcon';
import BlockTitle from '../BlockTitle';

type Props = {
  mood: Object,
  onPressEdit: Function,
};

export default function MoodSelector(props: Props) {
  const {
    mood: {moodKey, subMoods},
    onPressEdit,
  } = props;
  console.log({subMoods});

  return (
    <View style={styles.container}>
      <BlockTitle title={i18n.t('mood')} />
      <View style={styles.contentContainer}>
        <MoodIcon
          containerStyle={styles.iconContainerStyle}
          moodKey={moodKey}
          disabled
          coverIcon={Interface.CHECK_ROUND}
        />
        <View style={styles.subMoodsContainer}>
          {subMoods.map(item => {
            const currentColor = INTENSITY_COLORS[item.intensity];
            const isActive = item.intensity > 0;

            return (
              <View style={styles.subMood}>
                <View style={styles.row}>
                  <View
                    style={[
                      styles.bullet,
                      isActive ? {backgroundColor: currentColor} : null,
                    ]}
                  />
                  <Text style={styles.subMoodLabel}>
                    {i18n.t(item.subMoodKey, {count: 1})}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.subMoodValue,
                    isActive ? styles.subMoodValueActive : null,
                  ]}>
                  {i18n.t(INTENSITY_NAMES[item.intensity], {count: 1})}
                </Text>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.editButton} onPress={onPressEdit}>
          <Image source={Interface.EDIT} style={styles.editIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
