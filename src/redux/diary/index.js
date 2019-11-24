import * as ActionTypes from '../../constants/actionTypes';
import reducer from './reducer';

export default reducer;

export function updateLogin(item) {
  return {
    type: ActionTypes.ADD_DIARY_ITEM,
    payload: item,
  };
}
