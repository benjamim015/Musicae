import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ITrack } from '../../../components/Track';
import api from '../../../services/api';
import {
  loadNextTracksFailure,
  loadNextTracksRequest,
  loadNextTracksSuccess,
  setTracksRequest,
  setTracksSuccess,
} from './actions';
import { ActionTypes } from './types';

type LoadTracksRequest = ReturnType<typeof loadNextTracksRequest>;
type SetTracksRequest = ReturnType<typeof setTracksRequest>;

interface IResponse {
  data: ITrack[];
}

function* loadTracks({ payload }: LoadTracksRequest) {
  const { tracksIndex } = payload;

  try {
    const tracks: AxiosResponse<IResponse> = yield call(
      api.get,
      `/chart/0/tracks/?limit=${10}&index=${tracksIndex}`
    );

    yield put(loadNextTracksSuccess(tracks.data.data));
  } catch {
    yield put(loadNextTracksFailure(10));
  }
}

function* setTracks({ payload }: SetTracksRequest) {
  const { search } = payload;

  try {
    const tracks: AxiosResponse<IResponse> = yield call(
      api.get,
      `/search?q=${search}`
    );

    yield put(setTracksSuccess(tracks.data.data));
  } catch (error) {
    console.error(error);
  }
}

export default all([
  takeLatest(ActionTypes.loadNextTracksRequest, loadTracks),
  takeLatest(ActionTypes.setTracksRequest, setTracks),
]);
