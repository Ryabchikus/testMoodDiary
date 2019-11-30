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

  function setMoodType(key, index) {
    onSetMood(key);
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
        {MOOD_TYPES_ARR.map((item, index) => {
          const isActive = selectedMood === item.key;

          return (
            <TouchableOpacity
              key={item.key}
              disabled={isActive}
              style={styles.moodItemContainer}
              onPress={() => setMoodType(item.key, index)}>
              <MoodIcon
                moodKey={item.key}
                isActive={isActive}
                containerStyle={[
                  styles.moodItem,
                  isActive ? styles.moodItemActive : null,
                ]}
                iconStyle={isActive ? styles.iconStyleActive : null}
              />
              <Text number0fLines={2} style={styles.moodItemTitle}>
                {i18n.t(item.key)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
