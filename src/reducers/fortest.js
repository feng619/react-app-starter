// @flow
import { CHANGE_TEST } from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case CHANGE_TEST:
      return action.payload;
    default:
      return state;
  }
}
