import * as React from 'react';

import Big from 'big.js';
import { getLanguage } from '../../../utils/helper';

interface Props {
  btc: string;
  currency: string;
  rate: Big;
}

const getFontSize = (len: number) => {
  if (len > 24) {
    return 16;
  }
  if (len > 18) {
    return 20;
  }
  return 24;
};

const Currency = ({ btc, currency, rate }: Props) => {
  const formatter = new Intl.NumberFormat(getLanguage(), {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  });

  const formatted = btc && btc !== '.' ? formatter.format(Number(new Big(btc).mul(new Big(rate)).round(2, 0))) : 0;

  return <div style={{ fontSize: `${getFontSize(String(formatted).length)}px` }}>{formatted}</div>;
};

export default Currency;
