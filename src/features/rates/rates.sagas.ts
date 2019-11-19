import { fork, put, delay } from 'redux-saga/effects';

import axios from 'axios';

import { RATES_FETCH_SUCCESS, RATES_FETCH_FAIL } from '../../actions';
import { mapRates } from './helper';
import Rates from './Rates';
import { RATE_REFRESH_INTERVAL } from '../../constants';

function* getRates() {
  while (true) {
    try {
      const response = yield axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
      const rates: Rates = mapRates(response.data.bpi);
      const currencies: string[] = Object.keys(rates);
      yield put({ type: RATES_FETCH_SUCCESS, payload: { rates, currencies } });
    } catch (e) {
      console.log(e);
      yield put({ type: RATES_FETCH_FAIL, payload: 'Failed to fetch rates' });
    }

    yield delay(RATE_REFRESH_INTERVAL);
  }
}

export function* ratesSagas() {
  yield fork(getRates);
}
