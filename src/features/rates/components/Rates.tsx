import React from 'react';
import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import RootState from '../../../RootState';

import CenteredBox from '../../../shared/components/CenteredBox';
import Loader from '../../../shared/components/Loader';
import Add from './Add';
import Btc from './Btc';
import Currencies from './Currencies';

const Wrapper = styled('div')`
  width: 400px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const Rates = () => {
  const [error, loading] = useSelector((state: RootState) => [state.rates.error, state.rates.loading]);
  return (
    <CenteredBox>
      <Loader loading={loading}>
        {error && <div id="error-message">{error}</div>}
        <Wrapper>
          <Btc />
          <Currencies />
          <Add />
        </Wrapper>
      </Loader>
    </CenteredBox>
  );
};

export default Rates;
