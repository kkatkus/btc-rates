import * as React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled('input')`
  font-family: 'Futura New', Futura, Avenir, sans-serif;
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  color: ${(props: any) => props.theme.colors.onInput};
  font-size: 24px;
  font-weight: 400;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 1rem;
  appearance: none;
  outline: 0;
  border: 0;
  background: ${(props: any) => props.theme.colors.inputBg};

  &:hover {
  }
  &:focus {
  }
`;

const Input = (props: any) => <StyledInput {...props} />;

export default Input;
