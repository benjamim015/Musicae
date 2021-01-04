/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';

import { ActionTypes, ICurrentSong } from './types';

const INITIAL_STATE: ICurrentSong = {
  img: '',
  src: '',
};

const currentSong: Reducer<ICurrentSong> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.changeCurrentSong: {
        const { songInfo } = action.payload;
        draft.img = songInfo.img;
        draft.src = songInfo.src;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default currentSong;
