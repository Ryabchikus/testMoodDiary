import * as ActionTypes from '../../constants/actionTypes';
import reducer from './reducer';

export default reducer;

export function setDiaryMood(params) {
  return {
    type: ActionTypes.SET_DIARY_MOOD,
    payload: params,
  };
}
