/* eslint-disable no-shadow */
export enum ActionTypes {
  changeCurrentSong = 'CHANGE_CURRENT_SONG',
}

export interface ICurrentSong {
  src: string;
  img: string;
}
