import { ITrack } from '../../../components/Track';
import { IAction } from '../../types';
import { ActionTypes } from './types';

export function loadNextTracksRequest(tracksIndex: number): IAction<number> {
  return {
    type: ActionTypes.loadNextTracksRequest,
    payload: {
      tracksIndex,
    },
  };
}

export function loadNextTracksSuccess(tracks: ITrack[]): IAction<ITrack[]> {
  return {
    type: ActionTypes.loadNextTracksSuccess,
    payload: {
      tracks,
    },
  };
}

export function loadNextTracksFailure(tracksIndex: number): IAction<number> {
  return {
    type: ActionTypes.loadNextTracksFailure,
    payload: {
      tracksIndex,
    },
  };
}

export function setTracksRequest(search: string): IAction<string> {
  return {
    type: ActionTypes.setTracksRequest,
    payload: {
      search,
    },
  };
}

export function setTracksSuccess(tracks: ITrack[]): IAction<ITrack[]> {
  return {
    type: ActionTypes.setTracksSuccess,
    payload: {
      tracks,
    },
  };
}
