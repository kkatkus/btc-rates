import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  symbol: string;
}

const SymbolStyled = styled('div')`
  position: absolute;
  left: 16px;
  top: 50%;
  font-size: 36px;
  margin-top: -20px;
  opacity: 0.2;
`;

const Symbol = ({ symbol }: Props) => <SymbolStyled dangerouslySetInnerHTML={{ __html: `${symbol}` }}></SymbolStyled>;

export default Symbol;
