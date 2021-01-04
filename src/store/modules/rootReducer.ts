import { combineReducers } from 'redux';

import activatedTab from './activatedTab/reducer';
import currentSong from './currentSong/reducer';
import favoriteTracks from './favoriteTracks/reducer';
import tracks from './tracks/reducer';

export default combineReducers({
  tracks,
  favoriteTracks,
  activatedTab,
  currentSong,
});
