/* @flow */

import * as ActionTypes from '../../constants/actionTypes';
import {SUBMOOD_TYPES_ARR} from '../../constants/moodTypes';

type SubMood = {
  subMoodKey: string | null,
  intensity: number,
};

type State = {
  todayDiaryMood: {
    moodKey: string | null,
    subMoods: Array<SubMood>,
  },
};

type Action = {
  type: string,
  payload: Object,
};

const initialState: State = {
  todayDiaryMood: {
    moodKey: null,
    //easy way to copy array with objects
    subMoods: SUBMOOD_TYPES_ARR.map(subMood => ({...subMood})),
  },
};

export default function diary(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_DIARY_MOOD: {
      const {payload} = action;

      return {
        ...state,
        todayDiaryMood: {
          ...state.todayDiaryMood,
          ...payload,
        },
      };
    }

    default:
      return state;
  }
}
