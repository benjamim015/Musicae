import { ITrack } from '../../../components/Track';
import { IAction } from '../../types';
import { ActionTypes } from './types';

export function addTrackToFavoriteTracks(track: ITrack): IAction<ITrack> {
  return {
    type: ActionTypes.addTrackToFavoriteTracks,
    payload: {
      track,
    },
  };
}

export function removeTrackFromFavoriteTracks(track: ITrack): IAction<ITrack> {
  return {
    type: ActionTypes.removeTrackFromFavoriteTracks,
    payload: {
      track,
    },
  };
}
