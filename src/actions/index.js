// @flow
import { CHANGE_TEST } from './types';

export function sendTestAction(d: boolean) {
  return {
    type: CHANGE_TEST,
    payload: d,
  };
}
