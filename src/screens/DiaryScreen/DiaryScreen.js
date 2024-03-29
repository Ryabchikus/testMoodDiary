/* @flow */

import React, {useState, useEffect} from 'react';
import {BackHandler, SafeAreaView, ScrollView, StatusBar} from 'react-native';
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
  const {todayDiaryMood} = useSelector(state => state.diary);

  const [isEditingState, setIsEditingState] = useState(false);
  const [isEditingFinishedState, setIsEditingFinishedState] = useState(
    Boolean(todayDiaryMood.moodKey),
  );

  const [currentMood, setCurrentMood] = useState(todayDiaryMood);

  const dispatch = useDispatch();
  const dispatchSetDiaryMood = params => dispatch(setDiaryMood(params));

  const prevCurrentMood = usePrevious(currentMood);
  const isValuesChanged = !prevCurrentMood || currentMood !== prevCurrentMood;

  function onSetMood(selectedMoodKey) {
    mergeState({moodKey: selectedMoodKey});
    setIsEditingState(true);
  }

  function onSetSubMood(subMoodIndex, value) {
    const newSubMoods = currentMood.subMoods.map(subMood => ({...subMood}));

    newSubMoods[subMoodIndex].intensity = value;
    mergeState({subMoods: newSubMoods});
  }

  function onFinishButtonPress() {
    dispatchSetDiaryMood({...currentMood});
    setIsEditingState(false);
    setIsEditingFinishedState(true);
  }

  function onPressEdit() {
    setIsEditingState(true);
  }

  function onBackButtonPress() {
    if (!isEditingFinishedState) {
      mergeState({
        moodKey: null,
        //easy way to copy array with objects
        subMoods: SUBMOOD_TYPES_ARR.map(subMood => ({...subMood})),
      });
    }
    if (isEditingState) {
      setIsEditingState(false);
      return true;
    }
    return false;
  }

  function mergeState(newState) {
    setCurrentMood(previousState => ({
      ...previousState,
      ...newState,
    }));
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackButtonPress);
    };
  });

  function renderEditingState() {
    return (
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <SubMoodsSelector
            onSetSubMood={onSetSubMood}
            subMoods={currentMood.subMoods}
          />
        </ScrollView>
        <CustomButton
          buttonLabel={i18n.t('finished')}
          onPress={onFinishButtonPress}
          disabled={!isValuesChanged}
        />
      </>
    );
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
              selectedMood={currentMood.moodKey}
              onSetMood={onSetMood}
            />
            {isEditingState ? renderEditingState() : null}
          </>
        )}
      </SafeAreaView>
    </>
  );
}
