import { IAction } from '../../types';
import { ActionTypes, ICurrentSong } from './types';

export function changeCurrentSong(
  songInfo: ICurrentSong
): IAction<ICurrentSong> {
  return {
    type: ActionTypes.changeCurrentSong,
    payload: {
      songInfo,
    },
  };
}
