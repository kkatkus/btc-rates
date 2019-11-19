import { RATES_FETCH_SUCCESS, RATES_FETCH_FAIL, CURRENCY_ADD, CURRENCY_REMOVE, BTC_UPDATE } from '../../actions';
import RatesState from './RatesState';

export const defaultRatesState: RatesState = {
  loading: true,
  btc: '1',
  rates: {},
  currencies: [],
  availableCurrencies: [],
};

const ratesReducer = (state = defaultRatesState, action) => {
  switch (action.type) {
    case CURRENCY_ADD:
      return {
        ...state,
        currencies: state.currencies.concat(action.payload),
        availableCurrencies: state.availableCurrencies.filter(f => f !== action.payload),
      };
    case CURRENCY_REMOVE:
      return {
        ...state,
        currencies: state.currencies.filter(f => f !== action.payload),
        availableCurrencies: state.availableCurrencies.concat(action.payload),
      };
    case RATES_FETCH_SUCCESS:
      return { ...state, rates: action.payload.rates, currencies: action.payload.currencies, loading: false };
    case RATES_FETCH_FAIL:
      return { ...state, error: action.payload, loading: false };
    case BTC_UPDATE:
      return { ...state, btc: action.payload };
    default: {
      return state;
    }
  }
};

export default ratesReducer;
