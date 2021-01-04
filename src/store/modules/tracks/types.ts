import { ITrack } from '../../../components/Track';

/* eslint-disable no-shadow */
export enum ActionTypes {
  loadNextTracksRequest = 'LOAD_NEXT_TRACKS_REQUEST',
  loadNextTracksSuccess = 'LOAD_NEXT_TRACKS_SUCCESS',
  loadNextTracksFailure = 'LOAD_NEXT_TRACKS_FAILURE',
  setTracksRequest = 'SET_TRACKS_REQUEST',
  setTracksSuccess = 'SET_TRACKS_SUCCESS',
}

export interface ITracks {
  tracks: ITrack[];
  isLoading: boolean;
  tracksIndex: number;
  isSearchingTracks: boolean;
}
