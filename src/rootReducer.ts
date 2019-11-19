import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import settings from './features/settings/settings.reducer';
import rates from './features/rates/rates.reducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    settings,
    rates,
  });

export default rootReducer;
