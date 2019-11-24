/* @flow */

import React, {useState} from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar } from "react-native";
import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import i18n from 'i18next';

import * as diaryActions from "../../constants/actionTypes";
import { Icons, Interface } from "../../constants/graphics";

import styles from "./styles";
import MoodSelector from "../../components/MoodSelector";
import Header from "../../components/Header";

function DiaryScreen() {

const [selectedMood, setSelectedMood] = useState('')
const [isEditState, setIsEditState] = useState(false)

  function onSetMood(moodKey) {
    setSelectedMood(moodKey);
    setIsEditState(true)
  }

  function handleBackButton() {
    setSelectedMood('');
    setIsEditState(false)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header withBackButton={isEditState} handleBackButton={handleBackButton} title={i18n.t('diary')} />
        <MoodSelector selectedMood={selectedMood} onSetMood={onSetMood} />
        {isEditState ? (<ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
          </View>
        </ScrollView>) : null}
      </SafeAreaView>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    diary: state.diary,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(diaryActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryScreen);
