import Rates from './Rates';

export default interface RatesState {
  loading: boolean;
  error?: string;
  btc: string;
  rates: Rates;
  currencies: string[];
  availableCurrencies: string[];
}
