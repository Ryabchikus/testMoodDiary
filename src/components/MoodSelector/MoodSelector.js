// @flow

import React, {useRef, useEffect} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import i18n from 'i18next';

import {MOOD_TYPES_ARR} from '../../constants/moodTypes';

import styles from './styles';
import MoodIcon from '../MoodIcon';
import BlockTitle from '../BlockTitle';

type Props = {
  selectedMood: string,
  onSetMood: Function,
};

export default function MoodSelector(props: Props) {
  const {selectedMood, onSetMood} = props;

  const scrollViewRef = useRef(null);

  function setMoodType(pressedMoodKey) {
    const index = MOOD_TYPES_ARR.findIndex(item => item.key === pressedMoodKey);

    onSetMood(pressedMoodKey);
    if (scrollViewRef?.current) {
      scrollViewRef.current.scrollTo({x: index * 75, animated: true});
    }
  }

  useEffect(() => {
    const selectedMoodIndex = MOOD_TYPES_ARR.map(i => i.key).indexOf(
      selectedMood,
    );
    if (scrollViewRef?.current && selectedMoodIndex !== -1) {
      scrollViewRef.current.scrollTo({
        x: selectedMoodIndex * 75,
        animated: true,
      });
    }
  }, [selectedMood]);

  return (
    <View style={styles.container}>
      <BlockTitle title={i18n.t('mood')} />
      <ScrollView
        contentContainerStyle={styles.moodsListContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        {MOOD_TYPES_ARR.map(item => {
          const isActive = selectedMood === item.key;

          return (
            <MoodIcon
              key={item.key}
              moodKey={item.key}
              isActive={isActive}
              containerStyle={styles.moodItemContainer}
              iconContainerStyle={isActive ? styles.moodItemActive : null}
              iconStyle={isActive ? styles.iconStyleActive : null}
              onPress={setMoodType}
              disabled={isActive}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
