import Big from 'big.js';

export default interface Rate {
  code: string;
  symbol: string;
  rate: Big;
  description: string;
}
