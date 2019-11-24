/* @flow */

import * as ActionTypes from '../../constants/actionTypes';

type State = {
  currentDiaryItem: {
    key: string | null,
    createdAt: number | null,
  },
};

type Action = {
  type: string,
  payload: Object,
};

const initialState: State = {
  currentDiaryItem: {
    key: null,
    createdAt: null,
  },
};

export default function diary(state: State = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_DIARY_ITEM: {
      return state;
    }

    default:
      return state;
  }
}
