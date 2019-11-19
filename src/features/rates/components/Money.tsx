import * as React from 'react';
import styled from '@emotion/styled';

import Big from 'big.js';

interface Props {
  btc: string;
  currency: string;
  rate: Big;
}

const MoneyStyled = styled('div')`
  font-size: 20px;
`;

const getLang = () => (navigator.languages !== undefined ? navigator.languages[0] : navigator.language);

const getFontSize = (len: number) => {
  if (len > 24) {
    return 16;
  }
  if (len > 18) {
    return 20;
  }
  return 24;
};

const Money = ({ btc, currency, rate }: Props) => {
  const formatter = new Intl.NumberFormat(getLang(), {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
  });

  const formatted = btc && btc !== '.' ? formatter.format(Number(new Big(btc).mul(new Big(rate)).round(2, 3))) : 0;

  return <MoneyStyled style={{ fontSize: `${getFontSize(String(formatted).length)}px` }}>{formatted}</MoneyStyled>;
};

export default Money;
