import { all } from 'redux-saga/effects';

import { settingsSagas } from './features/settings/settings.sagas';
import { ratesSagas } from './features/rates/rates.sagas';

export default function* rootSaga() {
  yield all([
    // add sagas
    settingsSagas(),
    ratesSagas(),
  ]);
}
