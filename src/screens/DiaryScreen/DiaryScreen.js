/* @flow */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import i18n from 'i18next';

import {setDiaryMood} from '../../redux/diary';
import {SUBMOOD_TYPES_ARR} from '../../constants/moodTypes';

import styles from './styles';
import MoodSelector from '../../components/MoodSelector';
import Header from '../../components/Header';
import SubMoodsSelector from '../../components/SubMoodsSelector';
import DiaryItem from '../../components/DiaryItem';
import CustomButton from '../../components/CustomButton';
import usePrevious from '../../hooks/usePrevious';

export default function DiaryScreen() {
  const [isEditingState, setIsEditingState] = useState(false);
  const [isEditingFinishedState, setIsEditingFinishedState] = useState(false);
  const {todayDiaryMood} = useSelector(state => state.diary);
  const dispatch = useDispatch();
  const dispatchSetDiaryMood = params => dispatch(setDiaryMood(params));
  const prevTodayDiaryMood = usePrevious(todayDiaryMood);

  const isValuesChanged =
    !prevTodayDiaryMood || prevTodayDiaryMood !== todayDiaryMood;

  function onSetMood(selectedMoodKey) {
    dispatchSetDiaryMood({
      moodKey: selectedMoodKey,
    });
    setIsEditingState(true);
  }

  function onSetSubMood(subMoodIndex, value) {
    const newSubMoods = todayDiaryMood.subMoods;

    newSubMoods[subMoodIndex].intensity = value;
    dispatchSetDiaryMood({
      subMoods: newSubMoods,
    });
  }

  function onFinishButtonPress() {
    setIsEditingState(false);
    setIsEditingFinishedState(true);
  }

  function onPressEdit() {
    setIsEditingState(true);
  }

  function onBackButtonPress() {
    if (!isEditingFinishedState) {
      dispatchSetDiaryMood({
        moodKey: null,
        //easy way to copy array with objects
        subMoods: SUBMOOD_TYPES_ARR.map(subMood => ({...subMood})),
      });
    }
    setIsEditingState(false);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.full}>
        <Header
          withBackButton={isEditingState}
          onBackButtonPress={onBackButtonPress}
          title={i18n.t('diary')}
        />
        {isEditingFinishedState && !isEditingState ? (
          <DiaryItem onPressEdit={onPressEdit} mood={todayDiaryMood} />
        ) : (
          <>
            <MoodSelector
              selectedMood={todayDiaryMood.moodKey}
              onSetMood={onSetMood}
            />
            {isEditingState ? (
              <>
                <ScrollView
                  contentInsetAdjustmentBehavior="automatic"
                  style={styles.scrollView}>
                  <SubMoodsSelector
                    onSetSubMood={onSetSubMood}
                    subMoods={todayDiaryMood.subMoods}
                  />
                </ScrollView>
                <CustomButton
                  buttonLabel={i18n.t('finished')}
                  onPress={onFinishButtonPress}
                  disabled={!isValuesChanged}
                />
              </>
            ) : null}
          </>
        )}
      </SafeAreaView>
    </>
  );
}
