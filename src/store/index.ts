import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ITrack } from '../components/Track';
import { TabNavigator } from './modules/activatedTab/types';
import { ICurrentSong } from './modules/currentSong/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { ITracks } from './modules/tracks/types';

export interface IState {
  tracks: ITracks;
  favoriteTracks: ITrack[];
  activatedTab: TabNavigator;
  currentSong: ICurrentSong;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
