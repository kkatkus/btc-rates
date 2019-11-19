import RateDto from './RateDto';
import Rate from './Rate';
import Rates from './Rates';

import Big from 'big.js';

export const validateValueFormat = (val: string): boolean => {
  return /^\d{0,6}\.?\d{0,6}$/.test(val);
};

export const mapRates = (rs: { [name: string]: RateDto }): Rates => {
  return Object.keys(rs || {}).reduce((arr, key) => {
    arr[key] = mapRate(rs[key]);
    return arr;
  }, {});
};

export const mapRate = (r: RateDto): Rate => ({
  code: r.code,
  symbol: r.symbol,
  rate: new Big(r.rate_float),
  description: r.description,
});
