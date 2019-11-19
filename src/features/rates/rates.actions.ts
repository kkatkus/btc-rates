import { CURRENCY_ADD, CURRENCY_REMOVE, BTC_UPDATE } from '../../actions';

export const addCurrency = (currency: string) => ({
  type: CURRENCY_ADD,
  payload: currency,
});

export const removeCurrency = (currency: string) => ({
  type: CURRENCY_REMOVE,
  payload: currency,
});

export const updateBtc = (val: string) => ({
  type: BTC_UPDATE,
  payload: val,
});
