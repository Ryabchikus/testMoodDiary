/* @flow */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import i18n from 'i18next';

import {setDiaryMood} from '../../redux/diary';
import {SUBMOOD_TYPES_ARR} from '../../constants/moodTypes';

import styles from './styles';
import MoodSelector from '../../components/MoodSelector';
import Header from '../../components/Header';
import SubMoodsSelector from '../../components/SubMoodsSelector';

export default function DiaryScreen() {
  const [isEditingState, setIsEditingState] = useState(false);
  const [isSelectedState, setIsSelectedState] = useState(false);
  const {moodKey, subMoods} = useSelector(state => state.diary.todayDiaryMood);
  const dispatch = useDispatch();
  const boundSetDiaryMood = params => dispatch(setDiaryMood(params));

  function onSetMood(selectedMoodKey) {
    boundSetDiaryMood({
      moodKey: selectedMoodKey,
      createdAt: null, //FIXME:
    });
    setIsEditingState(true);
  }

  function onSetSubMood(subMoodIndex, value) {
    const newSubMoods = subMoods;

    newSubMoods[subMoodIndex].intensity = value;
    boundSetDiaryMood({
      subMoods: newSubMoods,
    });
  }

  function handleFinishButtonPress() {
    setIsEditingState(false);
  }

  function handleBackButtonPress() {
    boundSetDiaryMood({
      moodKey: null,
      createdAt: null,
      subMoods: SUBMOOD_TYPES_ARR,
    });
    setIsEditingState(false);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header
          withBackButton={isEditingState}
          handleBackButtonPress={handleBackButtonPress}
          title={i18n.t('diary')}
        />
        <MoodSelector selectedMood={moodKey} onSetMood={onSetMood} />
        {isEditingState ? (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <SubMoodsSelector
              onSetSubMood={onSetSubMood}
              subMoods={[...subMoods]}
            />
          </ScrollView>
        ) : null}
      </SafeAreaView>
    </>
  );
}
