import * as React from 'react';
import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../../RootState';
import Input from '../../../shared/components/Input';
import { validateValueFormat, parseValue } from '../helper';
import { updateBtc } from '../rates.actions';

const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  padding: 20px 40px 0 40px;
  :after {
    position: absolute;
    top: 28px;
    right: 46px;
    font-size: 28px;
    opacity: 0.4;
    content: 'BTC';
  }
`;

const Btc = () => {
  const [btc] = useSelector((state: RootState) => [state.rates.btc]);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseValue(e.target.value);
    if (!validateValueFormat(val)) {
      return;
    }
    dispatch(updateBtc(val));
  };

  return (
    <Wrapper>
      <Input value={btc} onChange={handleChange} />
    </Wrapper>
  );
};

export default Btc;
