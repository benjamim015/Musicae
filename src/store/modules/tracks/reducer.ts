/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';
import { Reducer } from 'redux';

import { ActionTypes, ITracks } from './types';

const INITIAL_STATE: ITracks = {
  tracks: [],
  isLoading: true,
  tracksIndex: 0,
  isSearchingTracks: false,
};

const tracks: Reducer<ITracks> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.loadNextTracksRequest: {
        const { tracksIndex } = action.payload;
        if (tracksIndex === 0) {
          draft.tracks = [];
        }
        draft.isLoading = true;
        draft.tracksIndex = tracksIndex;
        draft.isSearchingTracks = false;
        break;
      }

      case ActionTypes.loadNextTracksSuccess: {
        const { tracks: payloadTracks } = action.payload;
        draft.tracks.push(...payloadTracks);
        draft.isLoading = false;
        break;
      }

      case ActionTypes.loadNextTracksFailure: {
        console.log('Error');
        break;
      }

      case ActionTypes.setTracksRequest: {
        draft.tracks = [];
        draft.isLoading = true;
        break;
      }

      case ActionTypes.setTracksSuccess: {
        const { tracks: payloadTracks } = action.payload;
        draft.tracks = payloadTracks;
        draft.isLoading = false;
        draft.isSearchingTracks = true;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default tracks;
