import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import RootState from '../../../RootState';
import { addCurrency } from '../rates.actions';
import Button from '../../../shared/components/Button';
import { transparentize } from 'polished';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  min-height: 120px;
  border-top: 1px solid ${(props: any) => transparentize(0.9, props.theme.colors.input)};
  padding: 0 40px 20px 40px;
  text-align: left;
  h3 {
    width: 100%;
    display: block;
    font-size: 12px;
    font-weight: normal;
    padding: 10px 0 0 0;
    opacity: 0.6;
  }
`;

const Chip = styled(Button)`
  padding: 5px 10px;
  margin-right: 10px;
`;

const Empty = styled('div')`
  top: 36px;
  left: 30px;
  position: absolute;
  text-align: center;
  font-size: 18px;
  transition: 1s all ease;
  transition-delay: 0.2s;
  text-align: center;
  padding: 10px;
  color: ${(props: any) => transparentize(0.8, props.theme.colors.onBackground)};
`;

const Add = () => {
  const [loading, availableCurrencies] = useSelector((state: RootState) => [
    state.rates.loading,
    state.rates.availableCurrencies,
  ]);
  const dispatch = useDispatch();

  const handleAddCurrency = (val: string) => {
    dispatch(addCurrency(val));
  };

  const emptyClass = loading || availableCurrencies.length ? 'hide' : 'show';

  return (
    <Wrapper>
      <h3>Available Currencies:</h3>
      <TransitionGroup className="fade-container">
        {availableCurrencies.map(m => (
          <CSSTransition key={m} timeout={300} classNames="fade">
            <Chip color="secondary" key={m} onClick={() => handleAddCurrency(m)}>
              + {m}
            </Chip>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Empty className={emptyClass}>No currencies.</Empty>
    </Wrapper>
  );
};

export default Add;
