import * as React from 'react';
import styled from '@emotion/styled';
import { darken, transparentize } from 'polished';
import { capitalize } from '../../../utils/helper';

const getColor = props => (props.color ? props.theme.colors[props.color] : props.theme.colors.primary);
const getOnColor = props =>
  props.color ? props.theme.colors[`on${capitalize(props.color)}`] : props.theme.colors.onPrimary;

const StyledButton = styled('button')`
  display: inline-block;

  background-color: ${(props: any) => getColor(props)};
  color: ${(props: any) => getOnColor(props)};

  border-radius: 6px;

  font-size: 1rem;
  font-weight: 500;

  padding: 0px;

  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  border: 0;
  outline: none;
  &:hover {
    background-color: ${(props: any) => darken(0.05, getColor(props))};
  }

  &:disabled {
    background-color: ${(props: any) => transparentize(0.5, getColor(props))};
    pointer-events: none;
  }
`;

const Button = (props: any) => <StyledButton {...props} />;

export default Button;
