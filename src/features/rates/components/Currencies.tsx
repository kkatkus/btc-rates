import * as React from 'react';
import styled from '@emotion/styled';

import { transparentize } from 'polished';
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrency } from '../rates.actions';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import RootState from '../../../RootState';
import Money from './Money';
import Symbol from './Symbol';
import Button from '../../../shared/components/Button';

const Wrapper = styled('div')`
  position: relative;
`;

const Ul = styled('ul')`
  width: 400px;
  min-height: 250px;
  list-style: none;
  padding: 10px 20px;
`;

const Li = styled('li')`
  position: relative;
  min-height: 75px;
  padding: 16px 16px 16px 60px;
  border-radius: 5px;
  width: 100%;
  :hover {
    background-color: ${(props: any) => transparentize(0.9, props.theme.colors.secondary)};
  }
`;

const Code = styled('div')`
  display: block;
  clear: both;
  text-transform: uppercase;
  font-size: 14px;
  opacity: 0.6;
`;

const RemoveButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 50%;
  margin-top: -13px;
  padding: 5px 10px;
  width: auto;
`;

const Empty = styled('div')`
  position: absolute;
  top: 30%;
  text-align: center;
  font-size: 32px;
  width: 100%;
  transition: 1s all ease;
  transition-delay: 0.2s;
  text-align: center;
  padding: 10px;
  color: ${(props: any) => transparentize(0.8, props.theme.colors.onBackground)};
`;

const Currencies = () => {
  const [loading, btc, currencies, rates] = useSelector((state: RootState) => [
    state.rates.loading,
    state.rates.btc,
    state.rates.currencies,
    state.rates.rates,
  ]);

  const dispatch = useDispatch();
  const handleRemoveCurrency = (val: string) => dispatch(removeCurrency(val));
  const emptyClass = loading || currencies.length ? 'hide' : 'show';

  return (
    <Wrapper>
      <Ul>
        <TransitionGroup className="fade-container">
          {currencies.map((c: string, i: number) => (
            <CSSTransition key={c} timeout={300} classNames="fade">
              <Li key={c}>
                <Symbol symbol={rates[c].symbol} />
                <Code>{rates[c].code}</Code>
                <Money btc={btc} currency={rates[c].code} rate={rates[c].rate} />
                <RemoveButton onClick={() => handleRemoveCurrency(c)}>x</RemoveButton>
              </Li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Ul>
      <Empty className={emptyClass}>No currencies.</Empty>
    </Wrapper>
  );
};

export default Currencies;
