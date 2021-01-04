/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';

import { ActionTypes, TabNavigator } from './types';

const INITIAL_STATE: TabNavigator = {
  tabName: window.location.pathname.includes('favorites')
    ? 'favorites'
    : 'home',
};

const activatedTab: Reducer<TabNavigator> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.changeActivatedTab: {
        const { tabName } = action.payload;
        draft.tabName = tabName;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default activatedTab;
