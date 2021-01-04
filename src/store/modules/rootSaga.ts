import { all } from 'redux-saga/effects';

import tracks from './tracks/sagas';

export default function* rootSaga(): Generator {
  return yield all([tracks]);
}
