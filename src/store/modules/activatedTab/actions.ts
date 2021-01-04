import { IAction } from '../../types';
import { ActionTypes } from './types';

export function changeActivatedTab(tabName: string): IAction<string> {
  return {
    type: ActionTypes.changeActivatedTab,
    payload: {
      tabName,
    },
  };
}
