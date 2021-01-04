/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';

import { ITrack } from '../../../components/Track';
import { ActionTypes } from './types';

const INITIAL_STATE: ITrack[] = JSON.parse(
  localStorage.getItem('@Musicae:favoriteTracks') || '[]'
);

const favoriteTracks: Reducer<ITrack[]> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addTrackToFavoriteTracks: {
        const { track } = action.payload;
        draft.push(track);
        const favorites: ITrack[] = JSON.parse(
          localStorage.getItem('@Musicae:favoriteTracks') || '[]'
        );
        favorites.push(track);
        localStorage.setItem(
          '@Musicae:favoriteTracks',
          JSON.stringify(favorites)
        );
        break;
      }

      case ActionTypes.removeTrackFromFavoriteTracks: {
        const { track } = action.payload;
        const findIndex = state.findIndex(t => t.id === track.id);
        if (findIndex > -1) {
          draft.splice(findIndex, 1);
        }
        localStorage.setItem('@Musicae:favoriteTracks', JSON.stringify(draft));
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default favoriteTracks;
